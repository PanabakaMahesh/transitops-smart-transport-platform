import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { navigation } from "../../constants/navigation";
import Logo from "./Logo";
import NavItem from "./NavItem";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`
        h-screen
        bg-slate-900
        border-r
        border-slate-800
        flex
        flex-col
        transition-all
        duration-300
        ${
          collapsed
            ? "w-20"
            : "w-72"
        }
      `}
    >
      <Logo collapsed={collapsed} />

      <div className="flex-1 overflow-y-auto px-3 py-5">
        <nav className="space-y-2">
          {navigation.map((item) => (
            <NavItem
              key={item.id}
              title={item.title}
              path={item.path}
              icon={item.icon}
              collapsed={collapsed}
            />
          ))}
        </nav>
      </div>

      <div className="border-t border-slate-800 p-4">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="
            w-full
            flex
            items-center
            justify-center
            rounded-xl
            bg-slate-800
            hover:bg-slate-700
            text-white
            py-3
            transition
          "
        >
          {collapsed ? (
            <ChevronRight size={20} />
          ) : (
            <ChevronLeft size={20} />
          )}
        </button>
      </div>
    </aside>
  );
}