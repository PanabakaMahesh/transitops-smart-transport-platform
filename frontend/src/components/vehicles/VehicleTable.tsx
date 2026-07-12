import VehicleRow from "./VehicleRow";

const vehicles = [
  {
    registration: "TS09AB1234",
    model: "Volvo FH16",
    driver: "John Carter",
    status: "Available",
    fuel: "Diesel",
  },
  {
    registration: "TS10CD5678",
    model: "Ashok Leyland",
    driver: "David Miller",
    status: "In Transit",
    fuel: "Diesel",
  },
  {
    registration: "TS11EF9012",
    model: "Tata Prima",
    driver: "Michael Scott",
    status: "Maintenance",
    fuel: "Diesel",
  },
  {
    registration: "TS12GH3456",
    model: "Eicher Pro",
    driver: "Robert Wilson",
    status: "Available",
    fuel: "CNG",
  },
  {
    registration: "TS13JK7890",
    model: "BharatBenz 2823",
    driver: "James Anderson",
    status: "Out of Service",
    fuel: "Diesel",
  },
  {
    registration: "TS14LM4321",
    model: "Mahindra Blazo",
    driver: "William Brown",
    status: "Available",
    fuel: "Diesel",
  },
];

export default function VehicleTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-5">
        <h2 className="text-xl font-semibold text-slate-800">
          Vehicle Registry
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Manage fleet vehicles and monitor their operational status.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Registration
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Vehicle
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Driver
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Status
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Fuel
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {vehicles.map((vehicle) => (
              <VehicleRow
                key={vehicle.registration}
                registration={vehicle.registration}
                model={vehicle.model}
                driver={vehicle.driver}
                status={vehicle.status}
                fuel={vehicle.fuel}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}