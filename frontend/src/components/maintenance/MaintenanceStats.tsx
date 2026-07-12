import { AlertTriangle, CircleCheckBig, Clock3, Wrench } from "lucide-react";

const stats = [
  {
    title: "Total Services",
    value: "94",
    icon: Wrench,
    color: "bg-blue-500",
  },
  {
    title: "Scheduled",
    value: "18",
    icon: Clock3,
    color: "bg-orange-500",
  },
  {
    title: "Completed",
    value: "70",
    icon: CircleCheckBig,
    color: "bg-emerald-500",
  },
  {
    title: "Urgent",
    value: "6",
    icon: AlertTriangle,
    color: "bg-red-500",
  },
];

export default function MaintenanceStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{stat.title}</p>

                <h2 className="mt-2 text-4xl font-bold text-slate-900">
                  {stat.value}
                </h2>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.color}`}
              >
                <Icon size={28} className="text-white" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}