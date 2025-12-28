import { defineConfig, env } from "prisma/config";
import "dotenv/config"; // <--- THIS LINE IS CRITICAL

export default defineConfig({
  schema: "prisma/schema.prisma",

  datasource: {
    provider: "postgresql",
    url: env("DATABASE_URL"),
  },

  migrations: {
    seed: "node ./prisma/seed.js",
  },
});
