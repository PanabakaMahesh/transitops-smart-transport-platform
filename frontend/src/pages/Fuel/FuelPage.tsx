import AddFuelButton from "../../components/fuel/AddFuelButton";
import FuelFilters from "../../components/fuel/FuelFilters";
import FuelStats from "../../components/fuel/FuelStats";
import FuelTable from "../../components/fuel/FuelTable";

export default function FuelPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Fuel Management</h1>

          <p className="mt-2 text-slate-500">
            Monitor fleet fuel consumption and expenses.
          </p>
        </div>

        <AddFuelButton />
      </div>

      <FuelStats />

      <FuelFilters />

      <FuelTable />
    </div>
  );
}