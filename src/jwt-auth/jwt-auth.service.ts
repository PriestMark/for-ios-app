import {
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtPayload } from './jwt-auth.strategy';

@Injectable()
export class JwtAuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  login(user) {
    if (!this.userService.getUser(user.email)) {
      if (user.email.toLowerCase().includes('@redrocket.software')) {
        let createUserDto: UserDto;
        Object.keys(user)
          .filter((key) => key in createUserDto)
          .forEach((key) => (createUserDto[key] = user[key]));
        this.userService.createUser(createUserDto);
      } else {
        throw new UnauthorizedException(
          'Cannot handle login for this user, please contact administrator.',
        );
      }
    }
    const payload: JwtPayload = {
      username: `${user.firstName} ${user.lastName}`,
      email: user.email,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
