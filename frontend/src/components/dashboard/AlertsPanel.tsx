import {
    AlertTriangle,
    CheckCircle2,
    Wrench,
} from "lucide-react";

const alerts = [
  {
    title: "Vehicle TN09AB1234 requires maintenance",
    type: "warning",
  },
  {
    title: "Trip TRP-1004 completed successfully",
    type: "success",
  },
  {
    title: "Driver license expires in 5 days",
    type: "danger",
  },
];

const iconMap = {
  warning: <Wrench className="text-amber-500" size={20} />,
  success: <CheckCircle2 className="text-emerald-500" size={20} />,
  danger: <AlertTriangle className="text-red-500" size={20} />,
};

export default function AlertsPanel() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-semibold text-slate-800">
        Alerts
      </h2>

      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="flex items-start gap-3 rounded-xl border border-slate-100 p-3"
          >
            {iconMap[alert.type as keyof typeof iconMap]}

            <p className="text-sm text-slate-600">
              {alert.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}