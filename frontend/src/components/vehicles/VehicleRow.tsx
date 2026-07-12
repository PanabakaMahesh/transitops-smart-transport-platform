import { Pencil, Trash2 } from "lucide-react";

interface VehicleRowProps {
  registration: string;
  model: string;
  driver: string;
  status: string;
  fuel: string;
}

export default function VehicleRow({
  registration,
  model,
  driver,
  status,
  fuel,
}: VehicleRowProps) {
  const statusClasses =
    status === "Available"
      ? "bg-green-100 text-green-700"
      : status === "In Transit"
      ? "bg-blue-100 text-blue-700"
      : status === "Maintenance"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
      <td className="px-6 py-4 font-semibold text-slate-800">
        {registration}
      </td>

      <td className="px-6 py-4 text-slate-600">
        {model}
      </td>

      <td className="px-6 py-4 text-slate-600">
        {driver}
      </td>

      <td className="px-6 py-4">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClasses}`}
        >
          {status}
        </span>
      </td>

      <td className="px-6 py-4">
        {fuel}
      </td>

      <td className="px-6 py-4">
        <div className="flex gap-2">
          <button
            className="
              rounded-lg
              bg-blue-100
              p-2
              text-blue-600
              transition
              hover:bg-blue-200
            "
          >
            <Pencil size={16} />
          </button>

          <button
            className="
              rounded-lg
              bg-red-100
              p-2
              text-red-600
              transition
              hover:bg-red-200
            "
          >
            <Trash2 size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
}