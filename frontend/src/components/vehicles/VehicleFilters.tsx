import { Search } from "lucide-react";

export default function VehicleFilters() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      {/* Search */}

      <div className="relative w-full lg:max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search by vehicle, registration..."
          className="
            w-full
            rounded-xl
            border
            border-slate-300
            py-3
            pl-11
            pr-4
            outline-none
            transition
            focus:border-orange-500
          "
        />
      </div>

      {/* Filters */}

      <div className="flex flex-col gap-3 sm:flex-row">
        <select
          className="
            rounded-xl
            border
            border-slate-300
            px-4
            py-3
            outline-none
            transition
            focus:border-orange-500
          "
        >
          <option>All Status</option>
          <option>Available</option>
          <option>In Transit</option>
          <option>Maintenance</option>
          <option>Out of Service</option>
        </select>

        <select
          className="
            rounded-xl
            border
            border-slate-300
            px-4
            py-3
            outline-none
            transition
            focus:border-orange-500
          "
        >
          <option>All Types</option>
          <option>Truck</option>
          <option>Trailer</option>
          <option>Mini Truck</option>
          <option>Container</option>
        </select>
      </div>
    </div>
  );
}