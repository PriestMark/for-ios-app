import { EntityRepository } from '@mikro-orm/postgresql';
import { InternalServerErrorException } from '@nestjs/common';
import { CreateEmployeDto } from './dto/create-employee.dto';
import { GetEmployeeFileterDto } from './dto/get-employee.dto';
import { Employee } from '../entities/employee.entity';

export class EmployeeRepository extends EntityRepository<Employee> {
  async getEmployees(filterDto: GetEmployeeFileterDto): Promise<Employee[]> {
    const { search } = filterDto;
    const query = this.createQueryBuilder('employee');

    if (search) {
    }
    try {
      const employees = await query.execute();
      return employees;
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
  async createEmployee(createEmployeeDto: CreateEmployeDto): Promise<Employee> {
    try {
      const newEmploye: Employee = this.create(createEmployeeDto);
      await this.persistAndFlush(newEmploye);
      return;
    } catch (err: any) {
      throw err.code == 23505
        ? new InternalServerErrorException('This email is already in use')
        : new InternalServerErrorException(err);
    }
  }
  async updateEmployeeById() {}
}
