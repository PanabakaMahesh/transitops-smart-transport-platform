import AddDriverButton from "../../components/drivers/AddDriverButton";
import DriverFilters from "../../components/drivers/DriverFilters";
import DriverStats from "../../components/drivers/DriverStats";
import DriverTable from "../../components/drivers/DriverTable";

export default function DriversPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Driver Management
          </h1>

          <p className="mt-2 text-slate-500">
            Manage drivers, licenses, assignments and availability.
          </p>
        </div>

        <AddDriverButton />
      </div>

      <DriverStats />

      <DriverFilters />

      <DriverTable />
    </div>
  );
}