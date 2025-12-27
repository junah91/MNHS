/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsOptional, IsInt } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  schoolId: string;

  @IsInt()
  gradeLevel: number;

  @IsString()
  @IsNotEmpty()
  section: string;

  @IsOptional()
  @IsString()
  previousSchool?: string;

  @IsOptional()
  @IsString()
  schoolStatus?: string;

  @IsOptional()
  @IsString()
  studentStatus?: string;
}
