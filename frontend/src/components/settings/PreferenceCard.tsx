import { Globe, Moon, Palette } from "lucide-react";

export default function PreferenceCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        Preferences
      </h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Globe className="text-orange-500" />
            <span>Language</span>
          </div>

          <span className="font-medium text-slate-600">
            English
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Moon className="text-orange-500" />
            <span>Theme</span>
          </div>

          <span className="font-medium text-slate-600">
            Light
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Palette className="text-orange-500" />
            <span>Accent Color</span>
          </div>

          <span className="font-medium text-slate-600">
            Orange
          </span>
        </div>
      </div>
    </div>
  );
}