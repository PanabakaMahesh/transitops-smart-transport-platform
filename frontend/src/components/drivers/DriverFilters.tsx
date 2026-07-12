import { Search } from "lucide-react";

export default function DriverFilters() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      <div className="relative w-full lg:max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search by driver name or license..."
          className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-orange-500"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <select className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500">
          <option>All Status</option>
          <option>Available</option>
          <option>On Duty</option>
          <option>Off Duty</option>
        </select>

        <select className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500">
          <option>All License Types</option>
          <option>Heavy Vehicle</option>
          <option>Medium Vehicle</option>
          <option>Light Motor Vehicle</option>
        </select>
      </div>
    </div>
  );
}