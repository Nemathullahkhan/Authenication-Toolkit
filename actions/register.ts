"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schema";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";
export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { email, password, name } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);
  // Check if the user already exists in the database
  if (existingUser) {
    return {
      error: "Email already in use!",
    };
  }

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });
  
  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email,verificationToken.token);


  return { success: "Confirmation email sent!!" };
};
