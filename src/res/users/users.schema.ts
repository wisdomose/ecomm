import { z } from "zod";

export class UserSchema {
  static create = z.object(
    {
      body: z
        .object({
          email: z
            .string({ required_error: "Email is required" })
            .email("Not a valid email"),
          password: z
            .string({ required_error: "Password is required" })
            .min(6, {
              message: "Password should be at least 6 characters long",
            }),
          fname: z.string({ required_error: "First name is required" }),
          lname: z.string({ required_error: "Last name is required" }),
          contact: z.string({ required_error: "Phone number is required" }),
          confirmPassword: z
            .string({
              required_error: "Confirm password is required",
            })
            .min(6, {
              message: "Confirm password should be at least 6 characters long",
            }),
        })
        .superRefine((data, ctx) => {
          if (data.password !== data.confirmPassword) {
            ctx.addIssue({
              message: "Passwords do not match",
              fatal: true,
              code: z.ZodIssueCode.custom,
            });
          }
        })
        .transform((data) => {
          const { password, email, fname, lname, contact } = data;
          return { password, email, fname, lname, contact };
        }),
    },
    { required_error: "No input provided" }
  );

  static login = z.object(
    {
      body: z.object({
        email: z
          .string({ required_error: "Email is required" })
          .email("Not a valid email"),
        password: z
          .string({ required_error: "Password is required" })
          .min(6, { message: "Password should be at least 6 characters long" }),
      }),
    },
    { required_error: "No input provided" }
  );
}

interface Schema {
  Create: z.infer<typeof UserSchema.create>;
  Login: z.infer<typeof UserSchema.login>;
}

export type { Schema };
