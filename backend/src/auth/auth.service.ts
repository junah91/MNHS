/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  // =============================
  // 🔐 LOGIN
  // =============================
  async login(loginDto: LoginDto) {
    const { schoolId, password } = loginDto;

    // 1️⃣ Try to find student
    const student = await this.prisma.student.findUnique({
      where: { schoolId },
      include: { user: true },
    });

    if (student && student.user.password) {
      const valid = await bcrypt.compare(password, student.user.password);
      if (!valid) throw new UnauthorizedException('Invalid password');
      return this.createToken(student.user);
    }

    // 2️⃣ Try to find teacher
    const teacher = await this.prisma.teacher.findUnique({
      where: { employeeId: schoolId },
      include: { user: true },
    });

    if (teacher && teacher.user.password) {
      const valid = await bcrypt.compare(password, teacher.user.password);
      if (!valid) throw new UnauthorizedException('Invalid password');
      return this.createToken(teacher.user);
    }

    // 3️⃣ Try to find alumni
    const alumni = await this.prisma.alumni.findUnique({
      where: { studentId: schoolId },
      include: { user: true },
    });

    if (alumni && alumni.user.password) {
      const valid = await bcrypt.compare(password, alumni.user.password);
      if (!valid) throw new UnauthorizedException('Invalid password');
      return this.createToken(alumni.user);
    }

    // ❌ Not found in any
    throw new BadRequestException('School ID not found or not registered');
  }

  // =============================
  // 🧾 REGISTER
  // =============================
  async register(registerDto: RegisterDto) {
    const { schoolId, firstName, lastName, password } = registerDto;

    // 1️⃣ Try to match with student record
    const student = await this.prisma.student.findUnique({
      where: { schoolId },
      include: { user: true },
    });

    if (student)
      return this.registerUser(student.user, firstName, lastName, password);

    // 2️⃣ Try to match with teacher record
    const teacher = await this.prisma.teacher.findUnique({
      where: { employeeId: schoolId },
      include: { user: true },
    });

    if (teacher)
      return this.registerUser(teacher.user, firstName, lastName, password);

    // 3️⃣ Try to match with alumni record
    const alumni = await this.prisma.alumni.findUnique({
      where: { studentId: schoolId },
      include: { user: true },
    });

    if (alumni)
      return this.registerUser(alumni.user, firstName, lastName, password);

    // ❌ If not found in any record
    throw new BadRequestException('School ID does not exist in school records');
  }

  // =============================
  // 🧩 Helper: Register a user
  // =============================
  private async registerUser(user, firstName, lastName, password) {
    if (user.password) throw new BadRequestException('User already registered');

    if (user.firstName !== firstName || user.lastName !== lastName)
      throw new BadRequestException('Name does not match school record');

    const hashed = await bcrypt.hash(password, 10);

    await this.prisma.user.update({
      where: { id: user.id },
      data: { password: hashed },
    });

    return { message: 'Registration successful' };
  }

  // =============================
  // 🔑 Helper: Create JWT Token
  // =============================
  private createToken(user) {
    const payload = { sub: user.id, role: user.role };

    return {
      message: 'Login successful',
      role: user.role,
      access_token: this.jwtService.sign(payload),
    };
  }
}
