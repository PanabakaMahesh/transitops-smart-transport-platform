import DriverRow from "./DriverRow";

const drivers = [
  {
    name: "John Carter",
    license: "TS-HV-12098",
    phone: "+91 9876543210",
    status: "Available",
    experience: "8 Years",
  },
  {
    name: "David Miller",
    license: "TS-HV-87564",
    phone: "+91 9123456789",
    status: "On Duty",
    experience: "5 Years",
  },
  {
    name: "Michael Scott",
    license: "TS-MV-65432",
    phone: "+91 9988776655",
    status: "Off Duty",
    experience: "4 Years",
  },
  {
    name: "Robert Wilson",
    license: "TS-HV-78954",
    phone: "+91 9012345678",
    status: "Available",
    experience: "10 Years",
  },
  {
    name: "James Anderson",
    license: "TS-LMV-45321",
    phone: "+91 9345678901",
    status: "On Duty",
    experience: "6 Years",
  },
];

export default function DriverTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-5">
        <h2 className="text-xl font-semibold text-slate-800">
          Driver Registry
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Manage drivers, licenses and assignments.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Driver
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                License
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Phone
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Status
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Experience
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {drivers.map((driver) => (
              <DriverRow
                key={driver.license}
                name={driver.name}
                license={driver.license}
                phone={driver.phone}
                status={driver.status}
                experience={driver.experience}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}