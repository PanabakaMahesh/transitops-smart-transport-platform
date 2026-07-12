import { Router } from "express";

import tripController from "../controllers/trip.controller";
import authMiddleware from "../middleware/auth.middleware";
import roleMiddleware from "../middleware/role.middleware";

const router = Router();

/**
 * Create Trip
 * Access: ADMIN, MANAGER
 */
router.post(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN", "MANAGER"),
  tripController.createTrip
);

/**
 * Get All Trips
 * Access: Any Authenticated User
 */
router.get(
  "/",
  authMiddleware,
  tripController.getTrips
);

/**
 * Get Trip By ID
 * Access: Any Authenticated User
 */
router.get(
  "/:id",
  authMiddleware,
  tripController.getTripById
);

/**
 * Update Trip
 * Access: ADMIN, MANAGER
 */
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN", "MANAGER"),
  tripController.updateTrip
);

/**
 * Delete Trip
 * Access: ADMIN
 */
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN"),
  tripController.deleteTrip
);

export default router;