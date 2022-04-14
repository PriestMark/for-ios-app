import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/jwt-auth/jwt-auth.guard';
import { CreateEmployeDto } from './dto/create-employee.dto';
import { GetEmployeeFileterDto } from './dto/get-employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}
  @Get()
  @UseGuards(JwtAuthGuard)
  getEmployees(@Query() filterDto: GetEmployeeFileterDto) {
    return this.employeeService.getEmployee(filterDto);
  }
  @Post()
  createEmployee(@Body() createEmployeeDto: CreateEmployeDto) {
    return this.employeeService.createEmployee(createEmployeeDto);
  }
}
