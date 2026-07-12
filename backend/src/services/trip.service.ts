import { Prisma } from "@prisma/client";
import prisma from "../config/prisma";
import {
  CreateTripInput,
  UpdateTripInput,
} from "../validations/trip.validation";

class TripService {
  /**
   * Create Trip
   */
  async createTrip(data: CreateTripInput) {
    // Check Vehicle
    const vehicle = await prisma.vehicle.findUnique({
      where: {
        id: data.vehicleId,
      },
    });

    if (!vehicle) {
      throw new Error("Vehicle not found");
    }

    // Check Driver
    const driver = await prisma.driver.findUnique({
      where: {
        id: data.driverId,
      },
    });

    if (!driver) {
      throw new Error("Driver not found");
    }

    // Check Vehicle Availability
    if (vehicle.status !== "AVAILABLE") {
      throw new Error("Vehicle is not available");
    }

    // Check Driver Availability
    if (driver.status !== "AVAILABLE") {
      throw new Error("Driver is not available");
    }

    // Create Trip + Update Statuses
    const trip = await prisma.$transaction(
      async (tx: Prisma.TransactionClient) => {
        const createdTrip = await tx.trip.create({
          data: {
            origin: data.origin,
            destination: data.destination,
            departureTime: new Date(data.departureTime),
            arrivalTime: data.arrivalTime
              ? new Date(data.arrivalTime)
              : null,
            vehicleId: data.vehicleId,
            driverId: data.driverId,
            status: data.status ?? "SCHEDULED",
          },
        });

        await tx.vehicle.update({
          where: {
            id: data.vehicleId,
          },
          data: {
            status: "ON_TRIP",
          },
        });

        await tx.driver.update({
          where: {
            id: data.driverId,
          },
          data: {
            status: "ON_TRIP",
          },
        });

        return createdTrip;
      }
    );

    return trip;
  }

  /**
   * Get All Trips
   */
  async getTrips() {
    return prisma.trip.findMany({
      include: {
        vehicle: true,
        driver: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  /**
   * Get Trip By ID
   */
  async getTripById(id: string) {
    const trip = await prisma.trip.findUnique({
      where: {
        id,
      },
      include: {
        vehicle: true,
        driver: true,
      },
    });

    if (!trip) {
      throw new Error("Trip not found");
    }

    return trip;
  }

  /**
   * Update Trip
   */
  async updateTrip(
    id: string,
    data: UpdateTripInput
  ) {
    const existingTrip = await this.getTripById(id);

    const updatedTrip = await prisma.$transaction(
      async (tx: Prisma.TransactionClient) => {
        const trip = await tx.trip.update({
          where: {
            id,
          },
          data: {
            ...data,
            departureTime: data.departureTime
              ? new Date(data.departureTime)
              : undefined,
            arrivalTime: data.arrivalTime
              ? new Date(data.arrivalTime)
              : undefined,
          },
        });

        if (data.status === "COMPLETED") {
          await tx.vehicle.update({
            where: {
              id: existingTrip.vehicleId,
            },
            data: {
              status: "AVAILABLE",
            },
          });

          await tx.driver.update({
            where: {
              id: existingTrip.driverId,
            },
            data: {
              status: "AVAILABLE",
            },
          });
        }

        return trip;
      }
    );

    return updatedTrip;
  }

  /**
   * Delete Trip
   */
  async deleteTrip(id: string) {
    const trip = await this.getTripById(id);

    await prisma.$transaction(
      async (tx: Prisma.TransactionClient) => {
        await tx.trip.delete({
          where: {
            id,
          },
        });

        await tx.vehicle.update({
          where: {
            id: trip.vehicleId,
          },
          data: {
            status: "AVAILABLE",
          },
        });

        await tx.driver.update({
          where: {
            id: trip.driverId,
          },
          data: {
            status: "AVAILABLE",
          },
        });
      }
    );

    return {
      message: "Trip deleted successfully",
    };
  }
}

export default new TripService();