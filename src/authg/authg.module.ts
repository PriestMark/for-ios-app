import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtAuthModule } from 'src/jwt-auth/jwt-auth.module';
import { AuthGController } from './authg.controller';
import { AuthGService } from './authg.service';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [ConfigModule, JwtAuthModule],
  controllers: [AuthGController],
  providers: [AuthGService, GoogleStrategy],
})
export class AuthGModule {}
