import { IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  schoolId: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @MinLength(6)
  password: string;
}
