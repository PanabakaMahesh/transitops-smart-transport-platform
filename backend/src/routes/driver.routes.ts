import { Router } from "express";

import driverController from "../controllers/driver.controller";
import authMiddleware from "../middleware/auth.middleware";
import roleMiddleware from "../middleware/role.middleware";

const router = Router();

/**
 * Create Driver
 * Access: ADMIN, MANAGER
 */
router.post(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN", "MANAGER"),
  driverController.createDriver
);

/**
 * Get All Drivers
 * Access: Authenticated Users
 */
router.get(
  "/",
  authMiddleware,
  driverController.getDrivers
);

/**
 * Get Driver By ID
 * Access: Authenticated Users
 */
router.get(
  "/:id",
  authMiddleware,
  driverController.getDriverById
);

/**
 * Update Driver
 * Access: ADMIN, MANAGER
 */
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN", "MANAGER"),
  driverController.updateDriver
);

/**
 * Delete Driver
 * Access: ADMIN
 */
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN"),
  driverController.deleteDriver
);

export default router;