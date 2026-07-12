import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, "Name must contain at least 3 characters"),

  email: z
    .string()
    .email("Invalid email address"),

  password: z
    .string()
    .min(6, "Password must contain at least 6 characters"),

  role: z
    .enum(["ADMIN", "MANAGER", "DISPATCHER"])
    .optional(),
});

export const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email address"),

  password: z
    .string()
    .min(6, "Password must contain at least 6 characters"),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;