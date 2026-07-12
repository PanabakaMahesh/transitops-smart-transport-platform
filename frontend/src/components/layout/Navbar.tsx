import {
    Bell,
    Menu,
    Moon,
    Search,
} from "lucide-react";

import UserMenu from "./UserMenu";

interface NavbarProps {
  onMenuClick?: () => void;
}

export default function Navbar({
  onMenuClick,
}: NavbarProps) {
  return (
    <header
      className="
        sticky
        top-0
        z-40
        flex
        h-20
        items-center
        justify-between
        border-b
        border-slate-200
        bg-white
        px-8
      "
    >
      {/* Left */}

      <div className="flex items-center gap-5">
        <button
          onClick={onMenuClick}
          className="
            rounded-lg
            p-2
            hover:bg-slate-100
            lg:hidden
          "
        >
          <Menu size={22} />
        </button>

        {/* Search */}

        <div className="relative hidden md:block">
          <Search
            size={18}
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="text"
            placeholder="Search vehicles, drivers, trips..."
            className="
              w-96
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              py-3
              pl-10
              pr-4
              text-sm
              outline-none
              transition

              focus:border-amber-500
              focus:bg-white
            "
          />
        </div>
      </div>

      {/* Right */}

      <div className="flex items-center gap-4">
        <button
          className="
            rounded-xl
            border
            border-slate-200
            p-3
            hover:bg-slate-100
            transition
          "
        >
          <Bell size={19} />
        </button>

        <button
          className="
            rounded-xl
            border
            border-slate-200
            p-3
            hover:bg-slate-100
            transition
          "
        >
          <Moon size={19} />
        </button>

        <UserMenu />
      </div>
    </header>
  );
}