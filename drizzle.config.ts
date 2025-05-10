import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "singlestore",
  tablesFilter: ["drive-tutorial_*"],
  dbCredentials: {
    host: env.SINGLESTORE_HOST as string,
    port: parseInt(env.SINGLESTORE_PORT as string),
    user: env.SINGLESTORE_USER as string,
    password: env.SINGLESTORE_PASS as string,
    database: env.SINGLESTORE_DB_NAME as string,
    ssl: {},
  },
} satisfies Config;
