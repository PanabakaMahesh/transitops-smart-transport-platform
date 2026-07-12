import AddVehicleButton from "../../components/vehicles/AddVehicleButton";
import VehicleFilters from "../../components/vehicles/VehicleFilters";
import VehicleStats from "../../components/vehicles/VehicleStats";
import VehicleTable from "../../components/vehicles/VehicleTable";

export default function VehiclesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Vehicle Management
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your fleet, monitor vehicle availability and maintain operational efficiency.
          </p>
        </div>

        <AddVehicleButton />
      </div>

      {/* Statistics */}

      <VehicleStats />

      {/* Filters */}

      <VehicleFilters />

      {/* Table */}

      <VehicleTable />
    </div>
  );
}