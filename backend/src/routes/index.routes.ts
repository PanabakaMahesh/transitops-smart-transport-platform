import { Router } from "express";

import authRoutes from "./auth.routes";
import vehicleRoutes from "./vehicle.routes";
import driverRoutes from "./driver.routes";
import tripRoutes from "./trip.routes";
import dashboardRoutes from "./dashboard.routes";

const router = Router();

router.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to TransitOps Backend API",
    version: "1.0.0",
    status: "Running",
  });
});

router.use("/api/auth", authRoutes);

router.use("/api/vehicles", vehicleRoutes);

router.use("/api/drivers", driverRoutes);

router.use("/api/trips", tripRoutes);

router.use("/api/dashboard", dashboardRoutes);

export default router;