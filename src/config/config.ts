import { envSchema } from "env-schema";

type Env = {
  PORT: number;
  SALT: number;
  COOKIE_SECRET: string;
};

const schema = {
  type: "object",
  required: ["PORT", "SALT", "COOKIE_SECRET"],
  properties: {
    PORT: {
      type: "number",
      default: 3000,
    },
    SALT: {
      type: "number",
    },
    COOKIE_SECRET: {
      type: "string",
    },
  },
};

const config = envSchema<Env>({
  schema: schema,
  dotenv: true,
});

export { config };
