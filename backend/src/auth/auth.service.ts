import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Student, Teacher, User } from '@prisma/client';


@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const { schoolId, password } = loginDto;

    const student: (Student & { user: User }) | null =
      await this.prisma.student.findUnique({
        where: { schoolId },
        include: { user: true },
      });

    if (student && student.user.password) {
      const valid = await bcrypt.compare(password, student.user.password);
      if (!valid) throw new UnauthorizedException('Invalid password');
      return {
        access_token: this.jwtService.sign({
          sub: student.user.id,
          role: student.user.role,
        }),
      };
    }

    const teacher: (Teacher & { user: User }) | null =
      await this.prisma.teacher.findUnique({
        where: { employeeId: schoolId },
        include: { user: true },
      });

    if (teacher && teacher.user.password) {
      const valid = await bcrypt.compare(password, teacher.user.password);
      if (!valid) throw new UnauthorizedException('Invalid password');
      return {
        access_token: this.jwtService.sign({
          sub: teacher.user.id,
          role: teacher.user.role,
        }),
      };
    }

    throw new BadRequestException('School ID not found or not registered');
  }

  async register(registerDto: RegisterDto) {
    const { schoolId, firstName, lastName, password } = registerDto;

    const student: (Student & { user: User }) | null =
      await this.prisma.student.findUnique({
        where: { schoolId },
        include: { user: true },
      });

    if (!student) throw new BadRequestException('School ID does not exist');
    if (
      student.user.firstName !== firstName ||
      student.user.lastName !== lastName
    )
      throw new BadRequestException('Name does not match school record');
    if (student.user.password)
      throw new BadRequestException('User already registered');

    const hashedPassword = await bcrypt.hash(password, 10);

    await this.prisma.user.update({
      where: { id: student.userId },
      data: { password: hashedPassword },
    });

    return { message: 'Registration successful' };
  }
}
