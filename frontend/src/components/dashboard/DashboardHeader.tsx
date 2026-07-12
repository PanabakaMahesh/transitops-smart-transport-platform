import { CalendarDays } from "lucide-react";

export default function DashboardHeader() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Welcome back! Here's what's happening with your fleet today.
        </p>
      </div>

      <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
        <CalendarDays
          size={20}
          className="text-orange-500"
        />

        <span className="text-sm font-medium text-slate-700">
          {formattedDate}
        </span>
      </div>
    </div>
  );
}