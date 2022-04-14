import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthService } from './jwt-auth.service';
import { JwtAuthStrategy } from './jwt-auth.strategy';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      useFactory: async () =>
        //configService: ConfigService
        {
          return {
            secret: process.env.GOOGLE_SECRET,
            signOptions: {
              expiresIn: process.env.JWT_EXPIRES_IN,
            },
          };
        },
      //inject: [ConfigService],
    }),
  ],
  providers: [JwtAuthStrategy, JwtAuthService],
  exports: [JwtModule, JwtAuthService],
})
export class JwtAuthModule {}
