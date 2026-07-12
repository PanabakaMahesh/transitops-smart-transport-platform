import {
    Bus,
    Truck,
    Users,
    Wrench,
} from "lucide-react";

import AlertsPanel from "../../components/dashboard/AlertsPanel";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import FleetStatus from "../../components/dashboard/FleetStatus";
import RecentTrips from "../../components/dashboard/RecentTrips";
import StatsCard from "../../components/dashboard/StatsCard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Vehicles"
          value="128"
          change="+12 this month"
          icon={Truck}
          color="bg-blue-600"
        />

        <StatsCard
          title="Active Trips"
          value="42"
          change="+5 today"
          icon={Bus}
          color="bg-amber-600"
        />

        <StatsCard
          title="Drivers"
          value="63"
          change="+3 this week"
          icon={Users}
          color="bg-emerald-600"
        />

        <StatsCard
          title="Maintenance"
          value="8"
          change="2 urgent"
          icon={Wrench}
          color="bg-red-500"
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentTrips />
        </div>

        <div className="space-y-6">
          <FleetStatus />

          <AlertsPanel />
        </div>
      </div>
    </div>
  );
}