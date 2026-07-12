import { Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import AnalyticsPage from "../pages/Analytics/AnalyticsPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import DriversPage from "../pages/Drivers/DriversPage";
import FuelPage from "../pages/Fuel/FuelPage";
import MaintenancePage from "../pages/Maintenance/MaintenancePage";
import SettingsPage from "../pages/Settings/SettingsPage";
import TripsPage from "../pages/Trips/TripsPage";
import VehiclesPage from "../pages/Vehicles/VehiclesPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />

        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/vehicles" element={<VehiclesPage />} />
        <Route path="/drivers" element={<DriversPage />} />
        <Route path="/trips" element={<TripsPage />} />
        <Route path="/maintenance" element={<MaintenancePage />} />
        <Route path="/fuel" element={<FuelPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}