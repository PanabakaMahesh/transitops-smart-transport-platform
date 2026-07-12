import * as Icons from "lucide-react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  title: string;
  path: string;
  icon: string;
  collapsed?: boolean;
}

export default function NavItem({
  title,
  path,
  icon,
  collapsed = false,
}: NavItemProps) {
  const LucideIcon = (Icons as Record<string, any>)[icon] ?? Icons.Circle;

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `
        flex items-center
        ${collapsed ? "justify-center" : "gap-3"}
        px-4
        py-3
        rounded-xl
        text-sm
        font-medium
        transition-all
        duration-200

        ${
          isActive
            ? "bg-amber-600 text-white"
            : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }
      `
      }
    >
      <LucideIcon size={20} />

      {!collapsed && <span>{title}</span>}
    </NavLink>
  );
}