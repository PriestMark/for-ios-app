import { MikroORM } from '@mikro-orm/core';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app
    .get(MikroORM, { strict: false })
    .getSchemaGenerator()
    .updateSchema();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
