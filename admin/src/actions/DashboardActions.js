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
    }
    return dashboardData;
}