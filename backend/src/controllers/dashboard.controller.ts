import { Request, Response } from "express";
import dashboardService from "../services/dashboard.service";

class DashboardController {
  async getDashboard(req: Request, res: Response) {
    try {
      const dashboard = await dashboardService.getDashboardStats();

      return res.status(200).json({
        success: true,
        message: "Dashboard statistics fetched successfully",
        data: dashboard,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message ?? "Internal Server Error",
      });
    }
  }
}

export default new DashboardController();