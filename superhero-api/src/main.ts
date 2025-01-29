import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Enable cors on all origins for now
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
