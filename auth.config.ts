import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "./schema";
import { getUserByEmail } from "./data/user";
import bcrypt from "bcryptjs";
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"


export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // Credentials({
    //   async authorize(credentials) {
    //     const validatedFields = LoginSchema.safeParse(credentials);

    //     if (validatedFields.success) {
    //       const { email, password } = validatedFields.data;

    //       const user = await getUserByEmail(email);
    //       if (!user || !user.password) return null;


    //       const passwordsMatch = await bcrypt.compare(password,user.password);

    //       if(passwordsMatch) return user;
    //     }
    //     return null;
    //   },
    // }),

    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          // Validate credentials
          const validatedFields = LoginSchema.safeParse(credentials);
          
          if (!validatedFields.success) {
            console.error('Validation failed:', validatedFields.error);
            return null;
          }

          const { email, password } = validatedFields.data;

          // Find user
          const user = await getUserByEmail(email);
          if (!user) {
            console.error('No user found with this email');
            return null;
          }

          // Check if user has password (not OAuth user)
          if (!user.password) {
            console.error('User has no password set (possibly OAuth user)');
            return null;
          }

          // Verify password
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (!passwordsMatch) {
            console.error('Password does not match');
            return null;
          }

          // Return user object without password
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            // Include any other required fields
          };
          
        } catch (error) {
          console.error('Authorization error:', error);
          return null;
        }
      },
    }),
  ],

} satisfies NextAuthConfig;
