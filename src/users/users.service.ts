import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateEmployeDto } from 'src/employee/dto/create-employee.dto';
import { EmployeeService } from 'src/employee/employee.service';
import { User } from 'src/entities/user.entity';
import { UserDto } from './dto/user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository,

    private employeeServise: EmployeeService,
  ) {}
  async getUser(searchString): Promise<User> {
    let user: User;
    user = await this.userRepository.getUser(searchString);
    return user;
  }
  async createUser(createUserDto: UserDto): Promise<User> {
    const createEmployeeDto: CreateEmployeDto = {
      email: createUserDto.email,
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
    };
    await this.employeeServise.createEmployee(createEmployeeDto);
    return await this.userRepository.createUser(createUserDto);
  }
}
