import { EntityRepository } from '@mikro-orm/postgresql';
import { InternalServerErrorException } from '@nestjs/common';
import { GetEmployeeFileterDto } from './dto/get-employee.dto';
import { Employee } from './entities/employee.entity';

export class EmployeeRepository extends EntityRepository<Employee> {
  async getEmployees(
    filterDto: GetEmployeeFileterDto,
    //employee: Employee,
  ): Promise<Employee[]> {
    const { search } = filterDto;
    const query = this.createQueryBuilder('employee');
    //query.where({ employee });

    if (search) {
    }
    try {
      const employees = await query.execute('all');
      return employees;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
