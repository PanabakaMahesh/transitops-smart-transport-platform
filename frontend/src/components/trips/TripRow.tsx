import { Eye, Pencil } from "lucide-react";

interface TripRowProps {
  tripId: string;
  vehicle: string;
  driver: string;
  route: string;
  status: string;
}

export default function TripRow({
  tripId,
  vehicle,
  driver,
  route,
  status,
}: TripRowProps) {
  const badge =
    status === "Completed"
      ? "bg-green-100 text-green-700"
      : status === "Running"
      ? "bg-blue-100 text-blue-700"
      : status === "Scheduled"
      ? "bg-orange-100 text-orange-700"
      : "bg-red-100 text-red-700";

  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50">
      <td className="px-6 py-4 font-semibold">{tripId}</td>

      <td className="px-6 py-4">{vehicle}</td>

      <td className="px-6 py-4">{driver}</td>

      <td className="px-6 py-4">{route}</td>

      <td className="px-6 py-4">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badge}`}>
          {status}
        </span>
      </td>

      <td className="px-6 py-4">
        <div className="flex gap-2">
          <button className="rounded-lg bg-blue-100 p-2 text-blue-600 hover:bg-blue-200">
            <Eye size={16} />
          </button>

          <button className="rounded-lg bg-orange-100 p-2 text-orange-600 hover:bg-orange-200">
            <Pencil size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
}