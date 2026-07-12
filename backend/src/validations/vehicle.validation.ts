import { z } from "zod";

export const createVehicleSchema = z.object({
  registrationNumber: z
    .string()
    .min(3, "Registration number is required"),

  manufacturer: z
    .string()
    .min(2, "Manufacturer is required"),

  model: z
    .string()
    .min(2, "Model is required"),

  year: z
    .number()
    .int()
    .gte(2000, "Year must be 2000 or later"),

  capacity: z
    .number()
    .int()
    .positive("Capacity must be positive"),

  fuelType: z.enum([
    "PETROL",
    "DIESEL",
    "CNG",
    "ELECTRIC",
  ]),

  status: z
    .enum([
      "AVAILABLE",
      "ON_TRIP",
      "MAINTENANCE",
    ])
    .optional(),
});

export const updateVehicleSchema =
  createVehicleSchema.partial();

export type CreateVehicleInput =
  z.infer<typeof createVehicleSchema>;

export type UpdateVehicleInput =
  z.infer<typeof updateVehicleSchema>;