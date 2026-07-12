import FuelRow from "./FuelRow";

const rows = [
  {
    vehicle: "Volvo FH16",
    litres: "420 L",
    amount: "₹39,000",
    mileage: "8.7 km/L",
    date: "12 Jul",
  },
  {
    vehicle: "Tata Prima",
    litres: "380 L",
    amount: "₹35,200",
    mileage: "9.1 km/L",
    date: "11 Jul",
  },
  {
    vehicle: "Ashok Leyland",
    litres: "405 L",
    amount: "₹37,600",
    mileage: "8.5 km/L",
    date: "10 Jul",
  },
];

export default function FuelTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b px-6 py-5">
        <h2 className="text-xl font-semibold">Fuel Records</h2>
      </div>

      <table className="min-w-full">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-6 py-4 text-left">Vehicle</th>
            <th className="px-6 py-4 text-left">Litres</th>
            <th className="px-6 py-4 text-left">Amount</th>
            <th className="px-6 py-4 text-left">Mileage</th>
            <th className="px-6 py-4 text-left">Date</th>
            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <FuelRow key={row.vehicle} {...row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}