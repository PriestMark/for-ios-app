import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { v4 as uuidv4 } from 'uuid';
@Entity()
//{ customRepository: () => EmployeeRepository }
@Unique({ properties: ['email'] })
export class User {
  @PrimaryKey()
  userId: string = uuidv4();
  @Property()
  firstName: string;
  @Property()
  lastName: string;
  @Property({ nullable: true })
  picture?: string;
  @Property({ nullable: true })
  role: string;
  @Property()
  email: string;
}
