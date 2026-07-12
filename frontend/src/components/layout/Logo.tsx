interface LogoProps {
  collapsed?: boolean;
}

export default function Logo({ collapsed = false }: LogoProps) {
  return (
    <div className="flex items-center gap-3 px-6 py-6 border-b border-slate-700">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-600 text-white font-bold text-lg shadow-sm">
        T
      </div>

      {!collapsed && (
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white">
            TransitOps
          </h1>

          <p className="text-xs text-slate-400">
            Smart Transport Platform
          </p>
        </div>
      )}
    </div>
  );
}