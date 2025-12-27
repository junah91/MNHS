/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StatusUpdateDto } from './dto/status-update.dto';
import { StudentStatus } from '@prisma/client';

@Injectable()
export class StudentService {
  constructor(private readonly prisma: PrismaService) {}

  // 🧩 Create new student (status defaults to ENROLLED)
  async create(dto: CreateStudentDto, userId: string) {
    const existing = await this.prisma.student.findUnique({
      where: { schoolId: dto.schoolId },
    });

    if (existing) {
      throw new BadRequestException(
        'Student with this school ID already exists',
      );
    }

    return this.prisma.student.create({
      data: {
        ...dto,
        schoolStatus: StudentStatus.ENROLLED,
        enrollmentDate: new Date(),
        user: { connect: { id: userId } },
      },
    });
  }

  // 🧾 Get all students
  async findAll() {
    return this.prisma.student.findMany();
  }

  // 🔍 Get single student by ID
  async findOne(id: string) {
    const student = await this.prisma.student.findUnique({ where: { id } });
    if (!student) {
      throw new NotFoundException('Student not found');
    }
    return student;
  }

  // 🛠 Update student basic info
  async update(id: string, dto: UpdateStudentDto) {
    
  // Separate student fields vs user fields
  const studentFields: Partial<UpdateStudentDto> = {};
  const userFields: { firstName?: string; lastName?: string; email?: string } = {};

  if ('gradeLevel' in dto) studentFields.gradeLevel = dto.gradeLevel;
  if ('section' in dto) studentFields.section = dto.section;
  if ('schoolStatus' in dto) studentFields.schoolStatus = dto.schoolStatus;
  if ('previousSchool' in dto) studentFields.previousSchool = dto.previousSchool;

  if ('firstName' in dto) userFields.firstName = dto.firstName;
  if ('lastName' in dto) userFields.lastName = dto.lastName;
  if ('email' in dto) userFields.email = dto.email;

  return this.prisma.student.update({
    where: { id },
    data: {
      ...studentFields,
      user: Object.keys(userFields).length
        ? {
            update: userFields,
          }
        : undefined,
    },
  });
}
  
  // 🔄 Update student status (auto moves to alumni if GRADUATED)
  async updateStatus(id: string, dto: StatusUpdateDto) {
    const student = await this.findOne(id);

    if (dto.status === StudentStatus.TRANSFERRED && !dto.previousSchool) {
      throw new BadRequestException(
        'Previous school is required when transferring a student',
      );
    }

    return this.prisma.$transaction(async (tx) => {
      const updated = await tx.student.update({
        where: { id },
        data: {
          schoolStatus: dto.status,
          previousSchool: dto.previousSchool ?? student.previousSchool,
        },
      });

      if (dto.status === StudentStatus.GRADUATED) {
        const existingAlumni = await tx.alumni.findUnique({
          where: { studentId: updated.id },
        });

        if (!existingAlumni) {
          await tx.alumni.create({
            data: {
              studentId: updated.id,
              schoolId: updated.schoolId,
              userId: updated.userId,
              graduationYear: new Date(),
            },
          });
        }
      }

      return updated;
    });
  }

  // 🗑 Remove student
  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.student.delete({ where: { id } });
  }
}
