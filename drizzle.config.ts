import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

config({ path: ".env.local" });

export default defineConfig({
    schema: "./db/schema.ts",
    dialect: "postgresql",
    out: "./drizzle",
    dbCredentials: {
        url: process.env.AUTH_DRIZZLE_URL! as string,
    },
    verbose: true,
    strict: true,
});

const pool = postgres(
    process.env.AUTH_DRIZZLE_URL as string,
    { max: 5 }
);

export const db = drizzle(pool);
