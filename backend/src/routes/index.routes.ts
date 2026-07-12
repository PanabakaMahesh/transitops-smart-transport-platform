import { Router } from "express";
import authRoutes from "./auth.routes";

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

export default router;