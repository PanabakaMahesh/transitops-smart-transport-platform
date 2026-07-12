import { Mail, Phone, User } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        Profile Information
      </h2>

      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <User className="text-orange-500" />
          <div>
            <p className="text-sm text-slate-500">Name</p>
            <p className="font-semibold">Panabaka Mahesh</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Mail className="text-orange-500" />
          <div>
            <p className="text-sm text-slate-500">Email</p>
            <p className="font-semibold">
              mahesh@gmail.com
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Phone className="text-orange-500" />
          <div>
            <p className="text-sm text-slate-500">Phone</p>
            <p className="font-semibold">
              +91 9876543210
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}