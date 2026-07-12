import MaintenanceRow from "./MaintenanceRow";

const maintenanceRecords = [
  {
    serviceId: "SRV-1001",
    vehicle: "Volvo FH16",
    service: "Engine Service",
    date: "12 Jul 2026",
    mechanic: "Ravi Kumar",
    status: "Scheduled",
  },
  {
    serviceId: "SRV-1002",
    vehicle: "Ashok Leyland",
    service: "Oil Change",
    date: "10 Jul 2026",
    mechanic: "Arun Sharma",
    status: "Completed",
  },
  {
    serviceId: "SRV-1003",
    vehicle: "Tata Prima",
    service: "Brake Inspection",
    date: "15 Jul 2026",
    mechanic: "Vikram Singh",
    status: "In Progress",
  },
  {
    serviceId: "SRV-1004",
    vehicle: "Eicher Pro",
    service: "Tyre Replacement",
    date: "18 Jul 2026",
    mechanic: "Kiran Patel",
    status: "Urgent",
  },
  {
    serviceId: "SRV-1005",
    vehicle: "Mahindra Blazo",
    service: "General Service",
    date: "20 Jul 2026",
    mechanic: "Suresh Reddy",
    status: "Scheduled",
  },
] as const;

export default function MaintenanceTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-5">
        <h2 className="text-xl font-semibold text-slate-800">
          Maintenance Schedule
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Track upcoming and completed maintenance activities.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Service ID
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Vehicle
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Service
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Date
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Mechanic
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Status
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {maintenanceRecords.map((record) => (
              <MaintenanceRow
                key={record.serviceId}
                serviceId={record.serviceId}
                vehicle={record.vehicle}
                service={record.service}
                date={record.date}
                mechanic={record.mechanic}
                status={record.status}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}