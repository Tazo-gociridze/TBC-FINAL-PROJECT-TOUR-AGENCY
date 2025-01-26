import { z } from "zod";

export const registrationSchema = z
  .object({
    username: z
      .string()
      .min(1, { message: "Username cannot be empty" })
      .refine((value) => /^[A-Z]/.test(value), { message: 'Username must start with a capital letter' }),
    email: z
      .string()
      .min(1, { message: "Email cannot be empty" })
      .email({ message: 'Please enter a valid email' }),
    password: z
      .string()
      .min(1, { message: "Password cannot be empty" })
      .min(8, { message: 'Password must be at least 8 characters long' })
      .refine((value) => /[a-z]/.test(value), {
        message: 'Password must contain at least one lowercase character',
      })
      .refine((value) => /[A-Z]/.test(value), {
        message: 'Password must contain at least one uppercase character',
      })
       .refine((value) => /[0-9\W]/.test(value), {
         message: 'Password must contain at least one special character or number'
       }),
    repeatPassword: z
      .string()
      .min(1, { message: "Repeat password cannot be empty" }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Passwords must match',
    path: ['repeatPassword'],
  });