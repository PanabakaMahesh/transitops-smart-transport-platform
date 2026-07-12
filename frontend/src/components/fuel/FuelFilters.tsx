import { Search } from "lucide-react";

export default function FuelFilters() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:justify-between">
      <div className="relative w-full lg:max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />

        <input
          placeholder="Search vehicle..."
          className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none focus:border-orange-500"
        />
      </div>

      <div className="flex gap-3">
        <select className="rounded-xl border border-slate-300 px-4 py-3">
          <option>All Vehicles</option>
        </select>

        <select className="rounded-xl border border-slate-300 px-4 py-3">
          <option>This Month</option>
        </select>
      </div>
    </div>
  );
}