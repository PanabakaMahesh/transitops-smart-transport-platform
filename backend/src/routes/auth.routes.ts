import { Router } from "express";
import authController from "../controllers/auth.controller";
import authMiddleware from "../middleware/auth.middleware";

const router = Router();

/**
 * Public Routes
 */
router.post("/register", authController.register);

router.post("/login", authController.login);

/**
 * Protected Routes
 */
router.get("/profile", authMiddleware, authController.profile);

export default router;