import { Injectable, OnModuleInit } from '@nestjs/common';
import mongoose from 'mongoose';

@Injectable()
export class AppService implements OnModuleInit {
  async onModuleInit() {
    try {
      await mongoose.connect(process.env.DATABASE_URL as string);
      console.log('✅ MongoDB Connected Successfully!');
    } catch (err) {
      console.error('❌ MongoDB Connection Failed:', err);
    }
  }

  getHello(): string {
    return 'MongoDB connection test!';
  }
}
