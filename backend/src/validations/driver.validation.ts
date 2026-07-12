import { z } from "zod";

export const createDriverSchema = z.object({
  fullName: z
    .string()
    .min(3, "Driver name must be at least 3 characters"),

  phone: z
    .string()
    .min(10, "Phone number is required"),

  licenseNumber: z
    .string()
    .min(5, "License number is required"),

  licenseExpiry: z
    .string()
    .datetime("Invalid license expiry date"),

  status: z
    .enum([
      "AVAILABLE",
      "ON_TRIP",
      "OFF_DUTY"
    ])
    .optional(),
});

export const updateDriverSchema =
  createDriverSchema.partial();

export type CreateDriverInput =
  z.infer<typeof createDriverSchema>;

export type UpdateDriverInput =
  z.infer<typeof updateDriverSchema>;