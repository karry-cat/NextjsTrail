import {db} from "@/lib/db";

export async function getDashboardData() {
    const customerData = await db.buyerMaster.findMany({
        orderBy: {
            createdAt: "asc"
        },
        include: {
            sales: true
        }
    });
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
    const salesByDate = await db.$queryRaw`
        SELECT 
            strftime('%m/%d/%Y', SODateTime / 1000, 'unixepoch') AS date,
            SUM(grandTotalPrice) AS sales
        FROM SalesMaster
        GROUP BY date
        ORDER BY date desc;
    `;
    // console.log(result);
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
        salesChartData: salesByDate

    }
    return dashboardData;
}