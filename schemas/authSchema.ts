import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    cPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters"),
    // acceptedTerms: z.literal(true, {
    //   message: "You must accept the terms and privacy policy",
    // }),
  })
  .refine((data) => data.password === data.cPassword, {
    path: ["cPassword"],
    message: "Passwords do not match",
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
