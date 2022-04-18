import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { EmployeeService } from 'src/employee/employee.service';
import { Employee } from 'src/entities/employee.entity';
import { User } from 'src/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { JwtAuthService } from './jwt-auth.service';
import { JwtAuthStrategy } from './jwt-auth.strategy';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      useFactory: async () => {
        return {
          secret: process.env.GOOGLE_SECRET,
          signOptions: {
            expiresIn: process.env.JWT_EXPIRES_IN,
          },
        };
      },
    }),
    MikroOrmModule.forFeature([User, Employee]),
  ],
  providers: [JwtAuthStrategy, JwtAuthService, UsersService, EmployeeService],
  exports: [JwtModule, JwtAuthService, JwtAuthStrategy],
})
export class JwtAuthModule {}
