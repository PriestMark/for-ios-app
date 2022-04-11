import { Controller, Get, Query } from '@nestjs/common';
import { GetEmployeeFileterDto } from './dto/get-employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}
  @Get()
  getEmployees(@Query() filterDto: GetEmployeeFileterDto) {
    return this.employeeService.getEmployee(filterDto);
  }
}
