/* eslint-disable prettier/prettier */
/* update-student.dto.ts */
import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import { IsEnum, IsOptional } from 'class-validator';
import { StudentStatus } from '@prisma/client';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  @IsOptional()
  @IsEnum(StudentStatus)
  schoolStatus?: StudentStatus;
}
