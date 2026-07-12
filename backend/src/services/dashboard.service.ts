import prisma from "../config/prisma";

class DashboardService {
  /**
   * Dashboard Analytics
   */
  async getDashboardStats() {
    // ===========================
    // Vehicle Statistics
    // ===========================
    const totalVehicles = await prisma.vehicle.count();

    const availableVehicles = await prisma.vehicle.count({
      where: {
        status: "AVAILABLE",
      },
    });

    const vehiclesOnTrip = await prisma.vehicle.count({
      where: {
        status: "ON_TRIP",
      },
    });

    const vehiclesInMaintenance = await prisma.vehicle.count({
      where: {
        status: "MAINTENANCE",
      },
    });

    // ===========================
    // Driver Statistics
    // ===========================
    const totalDrivers = await prisma.driver.count();

    const availableDrivers = await prisma.driver.count({
      where: {
        status: "AVAILABLE",
      },
    });

    const driversOnTrip = await prisma.driver.count({
      where: {
        status: "ON_TRIP",
      },
    });

    const offDutyDrivers = await prisma.driver.count({
      where: {
        status: "OFF_DUTY",
      },
    });

    // ===========================
    // Trip Statistics
    // ===========================
    const totalTrips = await prisma.trip.count();

    const scheduledTrips = await prisma.trip.count({
      where: {
        status: "SCHEDULED",
      },
    });

    const inProgressTrips = await prisma.trip.count({
      where: {
        status: "IN_PROGRESS",
      },
    });

    const completedTrips = await prisma.trip.count({
      where: {
        status: "COMPLETED",
      },
    });

    const cancelledTrips = await prisma.trip.count({
      where: {
        status: "CANCELLED",
      },
    });

    // ===========================
    // Fuel Analytics
    // ===========================
    const fuelAnalytics = await prisma.fuelLog.aggregate({
      _sum: {
        cost: true,
        liters: true,
      },
    });

    // ===========================
    // Expense Analytics
    // ===========================
    const expenseAnalytics = await prisma.expense.aggregate({
      _sum: {
        amount: true,
      },
    });

    // ===========================
    // Maintenance Analytics
    // ===========================
    const totalMaintenanceRecords =
      await prisma.maintenance.count();

    const completedMaintenance =
      await prisma.maintenance.count({
        where: {
          status: "COMPLETED",
        },
      });

    const pendingMaintenance =
      await prisma.maintenance.count({
        where: {
          status: "PENDING",
        },
      });

    const maintenanceCost =
      await prisma.maintenance.aggregate({
        _sum: {
          cost: true,
        },
      });

    return {
      vehicles: {
        total: totalVehicles,
        available: availableVehicles,
        onTrip: vehiclesOnTrip,
        maintenance: vehiclesInMaintenance,
      },

      drivers: {
        total: totalDrivers,
        available: availableDrivers,
        onTrip: driversOnTrip,
        offDuty: offDutyDrivers,
      },

      trips: {
        total: totalTrips,
        scheduled: scheduledTrips,
        inProgress: inProgressTrips,
        completed: completedTrips,
        cancelled: cancelledTrips,
      },

      maintenance: {
        total: totalMaintenanceRecords,
        completed: completedMaintenance,
        pending: pendingMaintenance,
        totalCost: maintenanceCost._sum.cost ?? 0,
      },

      fuel: {
        totalFuelConsumed:
          fuelAnalytics._sum.liters ?? 0,

        totalFuelCost:
          fuelAnalytics._sum.cost ?? 0,
      },

      expenses: {
        totalExpense:
          expenseAnalytics._sum.amount ?? 0,
      },
    };
  }
}

export default new DashboardService();