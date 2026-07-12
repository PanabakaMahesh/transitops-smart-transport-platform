import PreferenceCard from "../../components/settings/PreferenceCard";
import ProfileCard from "../../components/settings/ProfileCard";
import SecurityCard from "../../components/settings/SecurityCard";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Settings
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your account, application preferences and security settings.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ProfileCard />

        <PreferenceCard />
      </div>

      <SecurityCard />
    </div>
  );
}