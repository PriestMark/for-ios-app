import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthService } from 'src/jwt-auth/jwt-auth.service';
import { AuthGService } from './authg.service';

@Controller('google')
export class AuthGController {
  constructor(
    private readonly authGService: AuthGService,
    private jwtAuthService: JwtAuthService,
  ) {}
  @Get()
  @Get('signin')
  @Get('signup')
  @Get('login')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
    // Guard redirects
  }

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req) {
    const { accessToken } = await this.jwtAuthService.login(req.user);
    req.res.cookie('jwt', accessToken);
    return this.authGService.googleLogin(req);
  }
}
