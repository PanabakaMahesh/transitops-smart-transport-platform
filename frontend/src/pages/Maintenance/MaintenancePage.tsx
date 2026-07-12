import MaintenanceFilters from "../../components/maintenance/MaintenanceFilters";
import MaintenanceStats from "../../components/maintenance/MaintenanceStats";
import MaintenanceTable from "../../components/maintenance/MaintenanceTable";
import ScheduleMaintenanceButton from "../../components/maintenance/ScheduleMaintenanceButton";

export default function MaintenancePage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Maintenance Management
          </h1>

          <p className="mt-2 text-slate-500">
            Schedule preventive maintenance and monitor service history across
            your fleet.
          </p>
        </div>

        <ScheduleMaintenanceButton />
      </div>

      <MaintenanceStats />

      <MaintenanceFilters />

      <MaintenanceTable />
    </div>
  );
}