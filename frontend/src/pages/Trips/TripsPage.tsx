import AddTripButton from "../../components/trips/AddTripButton";
import TripFilters from "../../components/trips/TripFilters";
import TripStats from "../../components/trips/TripStats";
import TripTable from "../../components/trips/TripTable";

export default function TripsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Trip Management
          </h1>

          <p className="mt-2 text-slate-500">
            Schedule, assign and monitor transport operations.
          </p>
        </div>

        <AddTripButton />
      </div>

      <TripStats />

      <TripFilters />

      <TripTable />
    </div>
  );
}