import { Fuel, IndianRupee, TrendingUp, Truck } from "lucide-react";

const stats = [
  { title: "Fuel Entries", value: "328", icon: Fuel, color: "bg-blue-500" },
  { title: "Total Litres", value: "9860", icon: Truck, color: "bg-emerald-500" },
  { title: "Fuel Cost", value: "₹8.2L", icon: IndianRupee, color: "bg-orange-500" },
  { title: "Efficiency", value: "8.9 km/L", icon: TrendingUp, color: "bg-purple-500" },
];

export default function FuelStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{item.title}</p>
                <h2 className="mt-2 text-3xl font-bold">{item.value}</h2>
              </div>

              <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.color}`}>
                <Icon className="text-white" size={28} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}