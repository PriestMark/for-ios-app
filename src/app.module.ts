import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configValidationSchema } from 'config.schema';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
      //validationSchema: configValidationSchema,
    }),

    MikroOrmModule.forRoot({
      entities: ['./dist/src/employee/entities'],
      entitiesTs: ['./src/employee/entities'],
      //dbName: process.env.DATABASE_ROOT || 'for-ios-app',
      clientUrl:
        process.env.DATABASE_URL || 'postgresql://postgres@127.0.0.1:5432',
      type: 'postgresql',
      //user: process.env.DATABASE_USERNAME || 'postgres',
      //password: process.env.DATABASE_PASSWORD || 'postgres',
    }),
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
