import { Pencil, Trash2 } from "lucide-react";

interface DriverRowProps {
  name: string;
  license: string;
  phone: string;
  status: string;
  experience: string;
}

export default function DriverRow({
  name,
  license,
  phone,
  status,
  experience,
}: DriverRowProps) {
  const statusStyle =
    status === "Available"
      ? "bg-green-100 text-green-700"
      : status === "On Duty"
      ? "bg-blue-100 text-blue-700"
      : "bg-orange-100 text-orange-700";

  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50">
      <td className="px-6 py-4 font-semibold">{name}</td>

      <td className="px-6 py-4">{license}</td>

      <td className="px-6 py-4">{phone}</td>

      <td className="px-6 py-4">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle}`}
        >
          {status}
        </span>
      </td>

      <td className="px-6 py-4">{experience}</td>

      <td className="px-6 py-4">
        <div className="flex gap-2">
          <button className="rounded-lg bg-blue-100 p-2 text-blue-600 hover:bg-blue-200">
            <Pencil size={16} />
          </button>

          <button className="rounded-lg bg-red-100 p-2 text-red-600 hover:bg-red-200">
            <Trash2 size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
}