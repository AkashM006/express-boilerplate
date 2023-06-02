import { z } from "zod";

const userRegistrationSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(2, "Name should we be atleast 3 characters long")
    .trim()
    .regex(/^[a-zA-z ]{3,}$/, {
      message:
        "Name should contain only alphabets and length should be atleast 2 characters long",
    }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .trim()
    .email("Please enter valid email"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .trim()
    .min(8, "Password must be atleast 8 characters long")
    .regex(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).*$/,
      "Password must have at least one number, one special character, and one capital letter"
    ),
});

export { userRegistrationSchema };