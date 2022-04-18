import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

export type JwtPayload = { username: string; email: string };

@Injectable()
export class JwtAuthStrategy extends PassportStrategy(Strategy) {
  constructor() {
    var cookieExtractor = function (req) {
      var token = null;
      if (req && req.cookies) {
        token = req.cookies['jwt'];
      }
      return token;
    };

    super({
      jwtFromRequest: cookieExtractor,
      ignoreExpiration: false,
      secretOrKey: process.env.GOOGLE_SECRET,
    });
  }

  async validate(payload: JwtPayload) {
    const { username, email } = payload;
    return { username: payload.username, email: payload.email };
  }
}
