import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

export default function MainLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-100">
      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Navbar */}

        <Navbar />

        {/* Page Content */}

        <main className="flex-1 overflow-y-auto bg-slate-100 p-8">
        <Outlet />
        </main>
      </div>
    </div>
  );
}