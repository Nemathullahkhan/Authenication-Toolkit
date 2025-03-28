import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import authConfig from "./auth.config";
import { db } from "./lib/db";
import { getUserById } from "./data/user";
import { UserRole } from "@prisma/client";
import { getTwoFactorConfirmationByUserId } from "./data/two-factor-confirmation";
import { getAccountByUserId } from "./data/account";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") return true;

      if (!user?.id) return false;

      const existingUser = await getUserById(user.id);
      // Prevenet sign0in without email verification
      if (!existingUser?.emailVerified) return false;

      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id
        );

        if (!twoFactorConfirmation) {
          return false;
        }

        // Delete two factor confirmation for next sign-in
        await db.twoFactorConfirmation.delete({
          where: { id: twoFactorConfirmation.id },
        });
      }

      return true;
    },
    async session({ token, session }) {
      try {
        if (!session.user) {
          return session;
        }

        return {
          ...session,
          user: {
            ...session.user,
            id: token.sub,
            name: token.name || session.user.name,
            email: token.email || "null",
            role: token.role as UserRole,
            isTwoFactorEnabled: token.isTwoFactorEnabled as boolean,
            isOAuth: token.isOAuth as boolean,
          }
        };
      } catch (error) {
        console.error("Session callback error:", error);
        return session;
      }
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;
      const existingAccount = await getAccountByUserId(existingUser.id);
      token.isOAuth = !! existingAccount;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.role;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled; 
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
