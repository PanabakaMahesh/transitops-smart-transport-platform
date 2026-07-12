import { KeyRound, Lock, ShieldCheck } from "lucide-react";

export default function SecurityCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        Security
      </h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-green-500" />
            <span>Two-Factor Authentication</span>
          </div>

          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
            Enabled
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Lock className="text-orange-500" />
            <span>Password</span>
          </div>

          <button className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600">
            Change
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <KeyRound className="text-blue-500" />
            <span>Last Login</span>
          </div>

          <span className="text-sm text-slate-500">
            Today, 09:45 AM
          </span>
        </div>
      </div>
    </div>
  );
}