import { Request, Response } from "express";
import driverService from "../services/driver.service";
import {
  createDriverSchema,
  updateDriverSchema,
} from "../validations/driver.validation";

class DriverController {
  /**
   * POST /api/drivers
   */
  async createDriver(req: Request, res: Response) {
    try {
      const data = createDriverSchema.parse(req.body);

      const driver = await driverService.createDriver(data);

      return res.status(201).json({
        success: true,
        message: "Driver created successfully",
        data: driver,
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  /**
   * GET /api/drivers
   */
  async getDrivers(req: Request, res: Response) {
    try {
      const drivers = await driverService.getDrivers();

      return res.status(200).json({
        success: true,
        count: drivers.length,
        data: drivers,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  /**
   * GET /api/drivers/:id
   */
  async getDriverById(req: Request, res: Response) {
    try {
      const id = String(req.params.id);

      const driver = await driverService.getDriverById(id);

      return res.status(200).json({
        success: true,
        data: driver,
      });
    } catch (error: any) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }

  /**
   * PUT /api/drivers/:id
   */
  async updateDriver(req: Request, res: Response) {
    try {
      const id = String(req.params.id);

      const data = updateDriverSchema.parse(req.body);

      const driver = await driverService.updateDriver(id, data);

      return res.status(200).json({
        success: true,
        message: "Driver updated successfully",
        data: driver,
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  /**
   * DELETE /api/drivers/:id
   */
  async deleteDriver(req: Request, res: Response) {
    try {
      const id = String(req.params.id);

      const result = await driverService.deleteDriver(id);

      return res.status(200).json({
        success: true,
        ...result,
      });
    } catch (error: any) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default new DriverController();