import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { Employee } from '../entities/employee.entity';
import { AuthGModule } from 'src/authg/authg.module';
import { JwtAuthModule } from 'src/jwt-auth/jwt-auth.module';
import { JwtAuthStrategy } from 'src/jwt-auth/jwt-auth.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [MikroOrmModule.forFeature([Employee]), AuthGModule],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
