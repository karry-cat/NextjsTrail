import {db} from "@/lib/db";
import {formatDate} from "@/lib/util";

export async function getDashboardData() {
    const customerData = await db.buyerMaster.findMany({
        orderBy: {
            createdAt: "asc"
        },
        include: {
            sales: true
        }
    });

    const customersByDate = customerData.reduce((acc, customer) => {
        const date = formatDate(customer.createdAt);
        if (!acc[date]) {
            acc[date] = {
                date,
                count: 0,
            };
        }
        acc[date].count += 1;
        return acc;
    }, {});
    // console.log(Object.values(customersByDate));

    const salesMasterData = await db.salesMaster.findMany({
        take: 5,
        include: {
            buyer: true,
            salesTransaction: true,
        },
        orderBy: {
            SODateTime: "desc",
        }
    });
    //todo change it to postgre compatible
    //sqlite version
    const salesByDate = await db.$queryRaw`
        SELECT strftime('%m/%d/%Y', SODateTime / 1000, 'unixepoch') AS date,
            SUM(grandTotalPrice) AS sales
        FROM SalesMaster
        GROUP BY date
        ORDER BY date desc;
    `;
    // console.log(salesByDate);
    const totalRevenue = await db.salesMaster.aggregate({
        _sum: {
            grandTotalPrice: true
        }
    });
    const totalBuyers = customerData?.filter((customer) => customer.sales?.length > 0).length;
    const dashboardData = {
        totalBuyers,
        totalCustomers: customerData.length,
        totalRevenue: totalRevenue._sum.grandTotalPrice,
        orders: salesMasterData,
        salesChartData: salesByDate,
        customerChartData:Object.values(customersByDate)

    }
    return dashboardData;
}