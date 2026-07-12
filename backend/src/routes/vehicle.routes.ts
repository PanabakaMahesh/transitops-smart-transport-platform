import { Router } from "express";

import vehicleController from "../controllers/vehicle.controller";
import authMiddleware from "../middleware/auth.middleware";
import roleMiddleware from "../middleware/role.middleware";

const router = Router();

/**
 * Create Vehicle
 * Access: ADMIN, MANAGER
 */
router.post(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN", "MANAGER"),
  vehicleController.createVehicle
);

/**
 * Get All Vehicles
 * Access: Authenticated Users
 */
router.get(
  "/",
  authMiddleware,
  vehicleController.getVehicles
);

/**
 * Get Vehicle By ID
 * Access: Authenticated Users
 */
router.get(
  "/:id",
  authMiddleware,
  vehicleController.getVehicleById
);

/**
 * Update Vehicle
 * Access: ADMIN, MANAGER
 */
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN", "MANAGER"),
  vehicleController.updateVehicle
);

/**
 * Delete Vehicle
 * Access: ADMIN
 */
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN"),
  vehicleController.deleteVehicle
);

export default router;