import {
    IndianRupee,
    Route,
    TrendingUp,
    Truck,
} from "lucide-react";

const cards = [
  {
    title: "Revenue",
    value: "₹12.8L",
    icon: IndianRupee,
    color: "bg-green-500",
  },
  {
    title: "Fleet Utilization",
    value: "91%",
    icon: Truck,
    color: "bg-blue-500",
  },
  {
    title: "Trips Completed",
    value: "684",
    icon: Route,
    color: "bg-orange-500",
  },
  {
    title: "Growth",
    value: "+18%",
    icon: TrendingUp,
    color: "bg-purple-500",
  },
];

export default function AnalyticsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {card.value}
                </h2>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl ${card.color}`}
              >
                <Icon
                  className="text-white"
                  size={28}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}