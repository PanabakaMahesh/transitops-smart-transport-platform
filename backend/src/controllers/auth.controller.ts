import { Request, Response } from "express";
import authService from "../services/auth.service";
import {
  registerSchema,
  loginSchema,
} from "../validations/auth.validation";

class AuthController {
  /**
   * Register User
   * POST /api/auth/register
   */
  async register(req: Request, res: Response) {
    try {
      const data = registerSchema.parse(req.body);

      const result = await authService.register(data);

      return res.status(201).json({
        success: true,
        ...result,
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  /**
   * Login User
   * POST /api/auth/login
   */
  async login(req: Request, res: Response) {
    try {
      const data = loginSchema.parse(req.body);

      const result = await authService.login(data);

      return res.status(200).json({
        success: true,
        ...result,
      });
    } catch (error: any) {
      return res.status(401).json({
        success: false,
        message: error.message,
      });
    }
  }

  /**
   * Get Logged-in User Profile
   * GET /api/auth/profile
   */
  async profile(req: Request, res: Response) {
    try {
      const userId = (req as any).user.userId;

      const user = await authService.getProfile(userId);

      return res.status(200).json({
        success: true,
        user,
      });
    } catch (error: any) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default new AuthController();