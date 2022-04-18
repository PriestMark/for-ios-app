import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { Roles } from '../users/user-roles.enum';
import { UserRepository } from '../users/user.repository';
import { v4 as uuidv4 } from 'uuid';

@Entity({ customRepository: () => UserRepository })
@Unique({ properties: ['email'] })
export class User {
  @PrimaryKey()
  userId: string = uuidv4();
  @Property()
  firstName: string;
  @Property()
  lastName: string;
  @Property({ default: 'EMPLOYEE' })
  role: Roles;
  @Property()
  email: string;
}
