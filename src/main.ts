import { SchemaComparator } from '@mikro-orm/postgresql';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { run } from './create-schema';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  run();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
