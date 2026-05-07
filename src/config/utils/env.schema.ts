import { z } from 'zod';
import type { ConfigService } from '@nestjs/config';

export const envSchema = z.object({
  DATABASE_URL: z.url(),
  FRONTEND_URL: z.url(),
  BETTER_AUTH_SECRET: z.string().length(32),
  GOOGLE_CLIENT_ID: z
    .string()
    .length(72)
    .endsWith('.apps.googleusercontent.com'),
  GOOGLE_CLIENT_SECRET: z.string().length(35),
});

type TEnv = z.infer<typeof envSchema>;

export type AppConfig = ConfigService<TEnv, true>;
