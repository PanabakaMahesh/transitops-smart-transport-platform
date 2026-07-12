import prisma from "../config/prisma";
import {
  CreateDriverInput,
  UpdateDriverInput,
} from "../validations/driver.validation";

class DriverService {
  /**
   * Create Driver
   */
  async createDriver(data: CreateDriverInput) {
    const existingPhone = await prisma.driver.findUnique({
      where: {
        phone: data.phone,
      },
    });

    if (existingPhone) {
      throw new Error("Phone number already exists");
    }

    const existingLicense = await prisma.driver.findUnique({
      where: {
        licenseNumber: data.licenseNumber,
      },
    });

    if (existingLicense) {
      throw new Error("License number already exists");
    }

    const driver = await prisma.driver.create({
      data: {
        fullName: data.fullName,
        phone: data.phone,
        licenseNumber: data.licenseNumber,
        licenseExpiry: new Date(data.licenseExpiry),
        status: data.status ?? "AVAILABLE",
      },
    });

    return driver;
  }

  /**
   * Get All Drivers
   */
  async getDrivers() {
    return prisma.driver.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  /**
   * Get Driver By ID
   */
  async getDriverById(id: string) {
    const driver = await prisma.driver.findUnique({
      where: {
        id,
      },
    });

    if (!driver) {
      throw new Error("Driver not found");
    }

    return driver;
  }

  /**
   * Update Driver
   */
  async updateDriver(
    id: string,
    data: UpdateDriverInput
  ) {
    await this.getDriverById(id);

    return prisma.driver.update({
      where: {
        id,
      },
      data: {
        ...data,
        ...(data.licenseExpiry && {
          licenseExpiry: new Date(data.licenseExpiry),
        }),
      },
    });
  }

  /**
   * Delete Driver
   */
  async deleteDriver(id: string) {
    await this.getDriverById(id);

    await prisma.driver.delete({
      where: {
        id,
      },
    });

    return {
      message: "Driver deleted successfully",
    };
  }
}

export default new DriverService();