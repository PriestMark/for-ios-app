import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { v4 as uuidv4 } from 'uuid';
import { EmployeeRepository } from '../employee.repository';
@Entity({ customRepository: () => EmployeeRepository })
@Unique({ properties: ['email'] })
export class Employee {
  @PrimaryKey()
  userId: string = uuidv4();
  @Property()
  firstName: string;
  @Property()
  lastName: string;
  @Property({ nullable: true })
  photoURL?: string;
  @Property({ nullable: true })
  startDate: Date;
  @Property({ nullable: true })
  jobTitle: string;
  @Property()
  email: string;
}
