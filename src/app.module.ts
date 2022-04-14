import { Inject, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EmployeeModule } from './employee/employee.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { getMicroOrmOptions } from 'micro-orm-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
    }),

    MikroOrmModule.forRoot(getMicroOrmOptions()),
    EmployeeModule,
  ],
  exports: [MikroOrmModule],
})
export class AppModule {}
