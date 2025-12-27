import { IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsString()
  schoolId: string;

  @IsString()
  @MinLength(6)
  password: string;
}
