import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { GetEmployeeFileterDto } from './dto/get-employee.dto';
import { Employee } from '../entities/employee.entity';
import { EmployeeRepository } from './employee.repository';
import { CreateEmployeDto } from './dto/create-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: EmployeeRepository,
  ) {}
  async getEmployee(filterDto: GetEmployeeFileterDto): Promise<Employee[]> {
    const employees = await this.employeeRepository.getEmployees(filterDto);
    return employees;
  }
  async createEmployee(createEmployeeDto: CreateEmployeDto): Promise<Employee> {
    const newEmploye = await this.employeeRepository.createEmployee(
      createEmployeeDto,
    );
    return newEmploye;
  }
}
