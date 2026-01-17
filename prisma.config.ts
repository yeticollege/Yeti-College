import { defineConfig, env } from "prisma/config";
import "dotenv/config"; // keep this

export default defineConfig({
  schema: "prisma/schema.prisma",

  // 🔴 THIS IS THE FIX
  engineType: "binary",

  datasource: {
    provider: "postgresql",
    url: env("DATABASE_URL"),
  },

  migrations: {
    seed: "node ./prisma/seed.js",
  },
});
