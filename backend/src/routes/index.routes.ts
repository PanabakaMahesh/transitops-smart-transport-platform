import { Router } from "express";

import authRoutes from "./auth.routes";
import vehicleRoutes from "./vehicle.routes";

const router = Router();

router.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Welcome to TransitOps Backend API",
    version: "1.0.0",
    status: "Running",
  });
});

router.use("/api/auth", authRoutes);

router.use("/api/vehicles", vehicleRoutes);

export default router;