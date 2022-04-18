import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EmployeeModule } from './employee/employee.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AuthGModule } from './authg/authg.module';
import { UsersModule } from './users/users.module';
import { getMicroOrmOptions } from 'micro-orm-config';
import { JwtAuthModule } from './jwt-auth/jwt-auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
    }),

    MikroOrmModule.forRoot(getMicroOrmOptions()),
    EmployeeModule,
    AuthGModule,
    UsersModule,
    JwtAuthModule,
  ],
  exports: [MikroOrmModule],
})
export class AppModule {}
