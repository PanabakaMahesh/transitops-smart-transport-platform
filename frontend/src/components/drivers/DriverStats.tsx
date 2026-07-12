import {
    CheckCircle,
    Clock3,
    UserCheck,
    Users,
} from "lucide-react";

const stats = [
  {
    title: "Total Drivers",
    value: 64,
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "On Duty",
    value: 51,
    icon: UserCheck,
    color: "bg-green-500",
  },
  {
    title: "Off Duty",
    value: 10,
    icon: Clock3,
    color: "bg-orange-500",
  },
  {
    title: "Available",
    value: 3,
    icon: CheckCircle,
    color: "bg-purple-500",
  },
];

export default function DriverStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div>
              <p className="text-sm text-slate-500">
                {item.title}
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-800">
                {item.value}
              </h2>
            </div>

            <div
              className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.color} text-white`}
            >
              <Icon size={28} />
            </div>
          </div>
        );
      })}
    </div>
  );
}