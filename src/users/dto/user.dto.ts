import { IsNotEmpty } from 'class-validator';
// no extra validation as we assume that data is always from Google account
export class UserDto {
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  @IsNotEmpty()
  email: string;
}
