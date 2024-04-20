import { z } from "zod";

export const signUpSchema = z.object({
    username: z.string()
        .min(2, { message: "Username should have atleast 2 charcters" })
        .max(20, "Username should not exceed more than 20 characters")
        .regex(/^[a-zA-Z0-9_]+$/, 'Username must not contain anys special characters'),

    email: z.string()
        .email({ message: "Invalid email address" }),
        
    password: z.string()
        .min(8, { message: "Password should have atleast 8 charcters" })

})