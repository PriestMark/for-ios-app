import { Module } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports: [MikroOrmModule.forFeature([User]), EmployeeModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
