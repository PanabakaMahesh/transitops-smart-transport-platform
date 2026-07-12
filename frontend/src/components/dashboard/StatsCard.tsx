import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  color: string;
}

export default function StatsCard({
  title,
  value,
  change,
  icon: Icon,
  color,
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </h2>

          <p className="mt-2 text-sm font-medium text-emerald-600">
            {change}
          </p>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}
        >
          <Icon
            size={28}
            className="text-white"
          />
        </div>
      </div>
    </div>
  );
}