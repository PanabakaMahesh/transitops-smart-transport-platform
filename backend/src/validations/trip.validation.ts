import { z } from "zod";

export const createTripSchema = z.object({
  origin: z
    .string()
    .min(3, "Origin must be at least 3 characters"),

  destination: z
    .string()
    .min(3, "Destination must be at least 3 characters"),

  departureTime: z
    .string()
    .datetime("Invalid departure time"),

  arrivalTime: z
    .string()
    .datetime("Invalid arrival time")
    .optional(),

  vehicleId: z
    .string()
    .min(1, "Vehicle ID is required"),

  driverId: z
    .string()
    .min(1, "Driver ID is required"),

  status: z
    .enum([
      "SCHEDULED",
      "IN_PROGRESS",
      "COMPLETED",
      "CANCELLED",
    ])
    .optional(),
});

export const updateTripSchema = createTripSchema.partial();

export type CreateTripInput = z.infer<typeof createTripSchema>;
export type UpdateTripInput = z.infer<typeof updateTripSchema>;