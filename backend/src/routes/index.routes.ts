import { Router } from "express";

const router = Router();

/**
 * Health Check Route
 */

router.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to TransitOps Backend API",
    version: "1.0.0",
    status: "Running"
  });
});

export default router;