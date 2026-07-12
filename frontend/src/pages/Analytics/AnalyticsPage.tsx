import AnalyticsCards from "../../components/analytics/AnalyticsCards";
import FleetUtilizationChart from "../../components/analytics/FleetUtilizationChart";
import MonthlyTripsChart from "../../components/analytics/MonthlyTripsChart";
import VehicleStatusChart from "../../components/analytics/VehicleStatusChart";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Fleet Analytics
        </h1>

        <p className="mt-2 text-slate-500">
          Monitor operational performance, fleet utilization and business insights.
        </p>
      </div>

      <AnalyticsCards />

      <div className="grid gap-6 xl:grid-cols-2">
        <FleetUtilizationChart />

        <MonthlyTripsChart />
      </div>

      <VehicleStatusChart />
    </div>
  );
}