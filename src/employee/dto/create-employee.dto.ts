import { IsDate, IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateEmployeDto {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsOptional()
  @IsString()
  photoURL?: string;
  @IsDate()
  @IsOptional()
  startDate?: Date;
  @IsOptional()
  @IsString()
  jobTitle?: string;
  @IsEmail()
  email: string;
}
