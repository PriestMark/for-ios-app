import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthGController } from './authg.controller';
import { AuthGService } from './authg.service';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [ConfigModule],
  controllers: [AuthGController],
  providers: [AuthGService, GoogleStrategy],
})
export class AuthgModule {}
