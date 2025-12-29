import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const connectionString = process.env.DATABASE_URL;

const pool = new pg.Pool({
  connectionString,
  // 1. Enable SSL for deployments (Vercel)
  // Most cloud providers (Neon, Supabase) need this.
  // Local DBs usually don't.
  ssl: process.env.NODE_ENV === "production" ? true : undefined,
});

const adapter = new PrismaPg(pool);

// 2. Instantiate Prisma
export const prisma = new PrismaClient({ adapter });
