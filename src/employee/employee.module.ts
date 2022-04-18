import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { Employee } from '../entities/employee.entity';
import { AuthGModule } from 'src/authg/authg.module';

@Module({
  imports: [MikroOrmModule.forFeature([Employee]), AuthGModule],
  controllers: [EmployeeController],
  providers: [EmployeeService],
  exports: [EmployeeService],
})
export class EmployeeModule {}
