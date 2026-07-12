import prisma from "../config/prisma";
import {
  CreateVehicleInput,
  UpdateVehicleInput,
} from "../validations/vehicle.validation";

class VehicleService {
  /**
   * Create Vehicle
   */
  async createVehicle(data: CreateVehicleInput) {
    const existingVehicle = await prisma.vehicle.findUnique({
      where: {
        registrationNumber: data.registrationNumber,
      },
    });

    if (existingVehicle) {
      throw new Error("Vehicle already exists");
    }

    const vehicle = await prisma.vehicle.create({
      data,
    });

    return vehicle;
  }

  /**
   * Get All Vehicles
   */
  async getVehicles() {
    return prisma.vehicle.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  /**
   * Get Vehicle By ID
   */
  async getVehicleById(id: string) {
    const vehicle = await prisma.vehicle.findUnique({
      where: {
        id,
      },
    });

    if (!vehicle) {
      throw new Error("Vehicle not found");
    }

    return vehicle;
  }

  /**
   * Update Vehicle
   */
  async updateVehicle(
    id: string,
    data: UpdateVehicleInput
  ) {
    await this.getVehicleById(id);

    return prisma.vehicle.update({
      where: {
        id,
      },
      data,
    });
  }

  /**
   * Delete Vehicle
   */
  async deleteVehicle(id: string) {
    await this.getVehicleById(id);

    await prisma.vehicle.delete({
      where: {
        id,
      },
    });

    return {
      message: "Vehicle deleted successfully",
    };
  }
}

export default new VehicleService();