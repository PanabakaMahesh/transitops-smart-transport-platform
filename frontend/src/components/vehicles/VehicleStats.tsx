import {
    CheckCircle,
    Truck,
    Wrench,
    XCircle,
} from "lucide-react";

const stats = [
  {
    title: "Total Vehicles",
    value: 128,
    icon: Truck,
    color: "bg-blue-500",
  },
  {
    title: "Active",
    value: 117,
    icon: CheckCircle,
    color: "bg-green-500",
  },
  {
    title: "Maintenance",
    value: 8,
    icon: Wrench,
    color: "bg-orange-500",
  },
  {
    title: "Out of Service",
    value: 3,
    icon: XCircle,
    color: "bg-red-500",
  },
];

export default function VehicleStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
            "
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
              className={`
                ${item.color}
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-xl
                text-white
              `}
            >
              <Icon size={28} />
            </div>
          </div>
        );
      })}
    </div>
  );
}