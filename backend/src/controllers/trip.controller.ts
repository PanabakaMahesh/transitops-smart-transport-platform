import { Request, Response } from "express";
import tripService from "../services/trip.service";
import {
  createTripSchema,
  updateTripSchema,
} from "../validations/trip.validation";

class TripController {
  /**
   * POST /api/trips
   */
  async createTrip(req: Request, res: Response) {
    try {
      const data = createTripSchema.parse(req.body);

      const trip = await tripService.createTrip(data);

      return res.status(201).json({
        success: true,
        message: "Trip created successfully",
        data: trip,
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  /**
   * GET /api/trips
   */
  async getTrips(req: Request, res: Response) {
    try {
      const trips = await tripService.getTrips();

      return res.status(200).json({
        success: true,
        count: trips.length,
        data: trips,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  /**
   * GET /api/trips/:id
   */
  async getTripById(req: Request, res: Response) {
    try {
      const id = String(req.params.id);

      const trip = await tripService.getTripById(id);

      return res.status(200).json({
        success: true,
        data: trip,
      });
    } catch (error: any) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }

  /**
   * PUT /api/trips/:id
   */
  async updateTrip(req: Request, res: Response) {
    try {
      const id = String(req.params.id);

      const data = updateTripSchema.parse(req.body);

      const trip = await tripService.updateTrip(id, data);

      return res.status(200).json({
        success: true,
        message: "Trip updated successfully",
        data: trip,
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  /**
   * DELETE /api/trips/:id
   */
  async deleteTrip(req: Request, res: Response) {
    try {
      const id = String(req.params.id);

      const result = await tripService.deleteTrip(id);

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

export default new TripController();