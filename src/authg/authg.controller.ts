import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { JwtAuthService } from 'src/jwt-auth/jwt-auth.service';
import { IUserRequest } from 'src/users/iUserRequest';
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
  // async googleAuthRedirect(@Req() req: IUserRequest, @Res() res: Response) {
  //   const { accessToken } = this.jwtAuthService.login(req.user);
  //   res.cookie('jwt', accessToken);
  //   return req.user;
  // }
  googleAuthRedirect(@Req() req) {
    const { accessToken } = this.jwtAuthService.login(req.user);

    //validate user

    //if is new

    //if is not new
    req.res.cookie('jwt', accessToken);
    return this.authGService.googleLogin(req);
  }
}
