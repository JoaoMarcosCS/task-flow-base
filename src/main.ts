import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { env } from './shared/environment/env.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.API_PORT ?? 3000);
}
await bootstrap();
