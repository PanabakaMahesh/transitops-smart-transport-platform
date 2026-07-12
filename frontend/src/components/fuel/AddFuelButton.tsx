import { Plus } from "lucide-react";

export default function AddFuelButton() {
  return (
    <button className="flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-600">
      <Plus size={18} />
      Add Fuel Entry
    </button>
  );
}