import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { v4 as uuidv4 } from 'uuid';
import { EmployeeRepository } from '../employee.repository';
@Entity({ customRepository: () => EmployeeRepository })
@Unique({ properties: ['email'] })
export class Employee {
  @PrimaryKey()
  userId: string = uuidv4();
  @Property()
  firstName!: string;
  @Property()
  lastName!: string;
  @Property()
  photoURL: string;
  @Property()
  startDate: Date;
  @Property()
  jobTitle: string;
  @Property()
  email: string;
}
