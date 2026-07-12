const trips = [
  {
    id: "TRP-1001",
    vehicle: "Volvo FH16",
    driver: "John Carter",
    destination: "Hyderabad",
    status: "In Transit",
  },
  {
    id: "TRP-1002",
    vehicle: "Ashok Leyland",
    driver: "David Miller",
    destination: "Bangalore",
    status: "Completed",
  },
  {
    id: "TRP-1003",
    vehicle: "Tata Prima",
    driver: "Michael Scott",
    destination: "Chennai",
    status: "Pending",
  },
  {
    id: "TRP-1004",
    vehicle: "Eicher Pro",
    driver: "Robert Wilson",
    destination: "Pune",
    status: "In Transit",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-emerald-100 text-emerald-700";

    case "Pending":
      return "bg-amber-100 text-amber-700";

    default:
      return "bg-blue-100 text-blue-700";
  }
};

export default function RecentTrips() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-800">
          Recent Trips
        </h2>

        <button className="text-sm font-medium text-orange-500 hover:text-orange-600">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 text-left">
              <th className="pb-3 text-sm text-slate-500">Trip ID</th>
              <th className="pb-3 text-sm text-slate-500">Vehicle</th>
              <th className="pb-3 text-sm text-slate-500">Driver</th>
              <th className="pb-3 text-sm text-slate-500">Destination</th>
              <th className="pb-3 text-sm text-slate-500">Status</th>
            </tr>
          </thead>

          <tbody>
            {trips.map((trip) => (
              <tr
                key={trip.id}
                className="border-b border-slate-100 hover:bg-slate-50"
              >
                <td className="py-4 font-medium">{trip.id}</td>

                <td>{trip.vehicle}</td>

                <td>{trip.driver}</td>

                <td>{trip.destination}</td>

                <td>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(
                      trip.status
                    )}`}
                  >
                    {trip.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}