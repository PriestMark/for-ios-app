import { Inject, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EmployeeModule } from './employee/employee.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
    }),

    MikroOrmModule.forRoot({
      entities: ['./dist/src/employee/entities'],
      entitiesTs: ['./src/employee/entities'],
      driverOptions: {
        connection: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      },
      clientUrl:
        process.env.DATABASE_URL ||
        'postgresql://postgres:postgres@127.0.0.1:5432/for-ios-app',
      type: 'postgresql',
    }),
    EmployeeModule,
  ],
  exports: [MikroOrmModule],
})
export class AppModule {}
