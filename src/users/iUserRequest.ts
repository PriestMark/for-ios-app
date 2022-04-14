import { Request } from 'express';
export interface IUserRequest extends Request {
  user: string; // or any other type
}
