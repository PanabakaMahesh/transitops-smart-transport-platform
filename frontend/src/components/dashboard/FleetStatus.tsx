const fleet = [
  {
    label: "Active Vehicles",
    value: 124,
    color: "bg-emerald-500",
  },
  {
    label: "In Maintenance",
    value: 8,
    color: "bg-amber-500",
  },
  {
    label: "Out of Service",
    value: 3,
    color: "bg-red-500",
  },
  {
    label: "Available",
    value: 96,
    color: "bg-blue-500",
  },
];

export default function FleetStatus() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-slate-800">
        Fleet Status
      </h2>

      <div className="space-y-5">
        {fleet.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span
                className={`h-3 w-3 rounded-full ${item.color}`}
              />

              <span className="text-slate-600">
                {item.label}
              </span>
            </div>

            <span className="text-lg font-semibold text-slate-900">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}