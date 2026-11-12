import { z } from 'zod';
import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config({
  path: join(__dirname, '../../../.env'),
});

const envSchema = z.object({
  API_PORT: z.preprocess((val) => Number(val), z.number()),
  NODE_VERSION: z.string(),
  ENVIRONMENT: z.enum(['development', 'production', 'test', 'local']),
  DB_HOST: z.string(),
  DB_PORT: z.preprocess((val) => Number(val), z.number()),
  DB_USER: z.string(),
  DB_PASS: z.string(),
  DB_NAME: z.string(),
});

export const env = envSchema.parse(process.env) as z.infer<typeof envSchema>;