import { Module } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UsersService } from './users.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports: [MikroOrmModule.forFeature([User]), EmployeeModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
