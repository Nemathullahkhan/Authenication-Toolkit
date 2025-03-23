import { PrismaClient } from "@prisma/client";

declare global {
     // eslint-disable-next-line no-var
    var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();
// The Reason we use globalThis is to prevent the PrismaClient from being instantiated multiple times in development mode, which can cause issues with hot reloading.
if(process.env.NODE_ENV !== "production") globalThis.prisma = db;

// In production, we want to create a new PrismaClient instance for each request to ensure that we have a fresh connection to the database.


// export const db = new PrismaClient(); // we use this in production mode
