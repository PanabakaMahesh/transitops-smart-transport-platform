import { Eye, Pencil } from "lucide-react";

interface MaintenanceRowProps {
  serviceId: string;
  vehicle: string;
  service: string;
  date: string;
  mechanic: string;
  status: "Scheduled" | "In Progress" | "Completed" | "Urgent";
}

export default function MaintenanceRow({
  serviceId,
  vehicle,
  service,
  date,
  mechanic,
  status,
}: MaintenanceRowProps) {
  const statusStyle = {
    Scheduled: "bg-orange-100 text-orange-700",
    "In Progress": "bg-blue-100 text-blue-700",
    Completed: "bg-emerald-100 text-emerald-700",
    Urgent: "bg-red-100 text-red-700",
  };

  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
      <td className="px-6 py-4 font-semibold">{serviceId}</td>

      <td className="px-6 py-4">{vehicle}</td>

      <td className="px-6 py-4">{service}</td>

      <td className="px-6 py-4">{date}</td>

      <td className="px-6 py-4">{mechanic}</td>

      <td className="px-6 py-4">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[status]}`}
        >
          {status}
        </span>
      </td>

      <td className="px-6 py-4">
        <div className="flex gap-2">
          <button className="rounded-lg bg-blue-100 p-2 text-blue-600 hover:bg-blue-200 transition">
            <Eye size={16} />
          </button>

          <button className="rounded-lg bg-orange-100 p-2 text-orange-600 hover:bg-orange-200 transition">
            <Pencil size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
}