import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { v4 as uuidv4 } from 'uuid';
import { EmployeeRepository } from '../employee/employee.repository';

@Entity({ customRepository: () => EmployeeRepository })
@Unique({ properties: ['email'] })
export class Employee {
  @PrimaryKey()
  userId: string = uuidv4();
  @Property()
  firstName: string;
  @Property()
  lastName: string;
  @Property({
    nullable: true,
    default:
      'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg',
  })
  photoURL?: string;
  @Property({
    nullable: true,
  })
  startDate: Date;
  @Property({ nullable: true })
  jobTitle: string;
  @Property()
  email: string;
}
