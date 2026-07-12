import { Eye, Pencil } from "lucide-react";

interface Props {
  vehicle: string;
  litres: string;
  amount: string;
  mileage: string;
  date: string;
}

export default function FuelRow({
  vehicle,
  litres,
  amount,
  mileage,
  date,
}: Props) {
  return (
    <tr className="border-b hover:bg-slate-50">
      <td className="px-6 py-4 font-medium">{vehicle}</td>
      <td className="px-6 py-4">{litres}</td>
      <td className="px-6 py-4">{amount}</td>
      <td className="px-6 py-4">{mileage}</td>
      <td className="px-6 py-4">{date}</td>

      <td className="px-6 py-4">
        <div className="flex gap-2">
          <button className="rounded bg-blue-100 p-2 text-blue-600">
            <Eye size={16} />
          </button>

          <button className="rounded bg-orange-100 p-2 text-orange-600">
            <Pencil size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
}