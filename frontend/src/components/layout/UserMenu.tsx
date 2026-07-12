import { ChevronDown, UserCircle2 } from "lucide-react";

interface UserMenuProps {
  name?: string;
  role?: string;
}

export default function UserMenu({
  name = "Panabaka Mahesh",
  role = "Fleet Manager",
}: UserMenuProps) {
  return (
    <button
      className="
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-slate-200
        bg-white
        px-4
        py-2
        shadow-sm
        transition
        hover:bg-slate-50
      "
    >
      <UserCircle2
        size={38}
        className="text-slate-600"
      />

      <div className="text-left">
        <p className="text-sm font-semibold text-slate-900">
          {name}
        </p>

        <p className="text-xs text-slate-500">
          {role}
        </p>
      </div>

      <ChevronDown
        size={18}
        className="text-slate-500"
      />
    </button>
  );
}