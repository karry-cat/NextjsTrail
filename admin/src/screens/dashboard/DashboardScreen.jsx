import RecentOrderSection from "@/screens/dashboard/RecentOrderSection";
import ChartSection from "@/screens/dashboard/ChartSection";

export default function DashboardScreen({dashboardData}){
    // console.log(dashboardData);
    return (
        <div className="space-y-5">
            <div className="grid grid-cols-3 gap-5">
                <div className="dashboard-card">
                    <h1 className="text-xl font-bold">Total Buyers</h1>
                    <h1 className="text-3xl">{dashboardData?.totalBuyers}</h1>
                </div>
                <div className="dashboard-card">
                    <h1 className="text-xl font-bold">Total Customer</h1>
                    <h1 className="text-3xl">{dashboardData?.totalCustomers}</h1>
                </div>
                <div className="dashboard-card">
                    <h1 className="text-xl font-bold">Total Revenue</h1>
                    <h1 className="text-3xl">${dashboardData?.totalRevenue}</h1>
                </div>
            </div>
            <RecentOrderSection orders={dashboardData.orders}/>
            <ChartSection dashboardData={dashboardData}/>
        </div>
    )
}