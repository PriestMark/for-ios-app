import { IsOptional, IsString } from 'class-validator';

export class GetEmployeeFileterDto {
  @IsOptional()
  @IsString()
  search?: string;
}
