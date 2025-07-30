import {getDashboardData} from "@/actions/DashboardActions";
import DashboardScreen from "@/screens/dashboard/DashboardScreen";

export default async function Home() {
  const dashboardData = await getDashboardData();
  return (
      <DashboardScreen dashboardData={dashboardData} />
    );
}