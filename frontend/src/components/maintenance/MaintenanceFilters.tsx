import { Search } from "lucide-react";

export default function MaintenanceFilters() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full max-w-md">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search vehicle or service..."
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

        <div className="flex gap-3">
          <select className="rounded-xl border border-slate-300 px-4 py-3 outline-none">
            <option>All Status</option>
            <option>Scheduled</option>
            <option>In Progress</option>
            <option>Completed</option>
            <option>Urgent</option>
          </select>

          <select className="rounded-xl border border-slate-300 px-4 py-3 outline-none">
            <option>All Services</option>
            <option>Oil Change</option>
            <option>Engine</option>
            <option>Tyres</option>
            <option>General Service</option>
          </select>
        </div>
      </div>
    </div>
  );
}