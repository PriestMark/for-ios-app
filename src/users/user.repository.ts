import { EntityRepository } from '@mikro-orm/postgresql';
import { InternalServerErrorException } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UserDto } from './dto/user.dto';

export class UserRepository extends EntityRepository<User> {
  async getUser(searchString: string): Promise<User> {
    try {
      const user: User =
        (await this.findOne({ userId: searchString })) ||
        (await this.findOne({ email: searchString }));
      return user;
    } catch (error) {
      return undefined;
    }
  }
  async createUser(createUserDto: UserDto): Promise<User> {
    try {
      const newUser: User = this.create(createUserDto);
      await this.persistAndFlush(newUser);
      return newUser;
    } catch (err: any) {
      throw err.code == 23505
        ? new InternalServerErrorException(
            'Unexpected error employee already exists... Probably paralell proceeding.',
          )
        : new InternalServerErrorException(err);
    }
  }
}
