import TripRow from "./TripRow";

const trips = [
  {
    tripId: "TRP-1001",
    vehicle: "Volvo FH16",
    driver: "John Carter",
    route: "Hyderabad → Bangalore",
    status: "Running",
  },
  {
    tripId: "TRP-1002",
    vehicle: "Ashok Leyland",
    driver: "David Miller",
    route: "Chennai → Hyderabad",
    status: "Completed",
  },
  {
    tripId: "TRP-1003",
    vehicle: "Tata Prima",
    driver: "Michael Scott",
    route: "Pune → Hyderabad",
    status: "Scheduled",
  },
  {
    tripId: "TRP-1004",
    vehicle: "Eicher Pro",
    driver: "Robert Wilson",
    route: "Hyderabad → Vijayawada",
    status: "Running",
  },
];

export default function TripTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-5">
        <h2 className="text-xl font-semibold text-slate-800">
          Trip Registry
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Monitor and manage transportation trips.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left">Trip ID</th>
              <th className="px-6 py-4 text-left">Vehicle</th>
              <th className="px-6 py-4 text-left">Driver</th>
              <th className="px-6 py-4 text-left">Route</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {trips.map((trip) => (
              <TripRow
                key={trip.tripId}
                {...trip}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}