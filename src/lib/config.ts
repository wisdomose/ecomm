import { envSchema } from "env-schema";

type Env = {
  PORT: number;
};

const schema = {
  type: "object",
  required: ["PORT"],
  properties: {
    PORT: {
      type: "number",
      default: 3000,
    },
  },
};

const config = envSchema<Env>({
  schema: schema,
  dotenv: true,
});

export { config };
