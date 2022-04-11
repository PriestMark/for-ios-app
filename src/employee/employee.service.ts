import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { GetEmployeeFileterDto } from './dto/get-employee.dto';
import { Employee } from './entities/employee.entity';
import { EmployeeRepository } from './employee.repository';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeRepository)
    private employeeRepository: EmployeeRepository,
  ) {}
  async getEmployee(filterDto: GetEmployeeFileterDto): Promise<Employee[]> {
    const employees = this.employeeRepository.getEmployees(filterDto);
    return employees;
  }
}
