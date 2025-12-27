/* eslint-disable prettier/prettier */
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { StudentStatus } from '@prisma/client';

export class StatusUpdateDto {
  @IsEnum(StudentStatus, {
    message:
      'Invalid status. Must be one of: ENROLLED, GRADUATED, TRANSFERRED, DROPPED_OUT',
  })
  status: StudentStatus;

  @IsOptional()
  @IsString()
  previousSchool?: string;
}
