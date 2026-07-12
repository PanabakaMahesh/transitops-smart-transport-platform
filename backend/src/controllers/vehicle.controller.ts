import { Request, Response } from "express";
import vehicleService from "../services/vehicle.service";
import {
  createVehicleSchema,
  updateVehicleSchema,
} from "../validations/vehicle.validation";

class VehicleController {
  /**
   * POST /api/vehicles
   */
  async createVehicle(req: Request, res: Response) {
    try {
      const data = createVehicleSchema.parse(req.body);

      const vehicle = await vehicleService.createVehicle(data);

      return res.status(201).json({
        success: true,
        message: "Vehicle created successfully",
        data: vehicle,
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  /**
   * GET /api/vehicles
   */
  async getVehicles(req: Request, res: Response) {
    try {
      const vehicles = await vehicleService.getVehicles();

      return res.status(200).json({
        success: true,
        count: vehicles.length,
        data: vehicles,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  /**
   * GET /api/vehicles/:id
   */
  async getVehicleById(req: Request, res: Response) {
    try {
      const id = String(req.params.id);

      const vehicle = await vehicleService.getVehicleById(id);

      return res.status(200).json({
        success: true,
        data: vehicle,
      });
    } catch (error: any) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }

  /**
   * PUT /api/vehicles/:id
   */
  async updateVehicle(req: Request, res: Response) {
    try {
      const id = String(req.params.id);

      const data = updateVehicleSchema.parse(req.body);

      const vehicle = await vehicleService.updateVehicle(id, data);

      return res.status(200).json({
        success: true,
        message: "Vehicle updated successfully",
        data: vehicle,
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  /**
   * DELETE /api/vehicles/:id
   */
  async deleteVehicle(req: Request, res: Response) {
    try {
      const id = String(req.params.id);

      const result = await vehicleService.deleteVehicle(id);

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

export default new VehicleController();