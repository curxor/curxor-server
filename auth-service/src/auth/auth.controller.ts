/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthService } from './auth.service';
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @GrpcMethod('AuthService', 'LoginUser')
  loginUser(data: { email: string; password: string; type: string }) {
    const value = this.authService.login(data.type, data);
    return { token: null, data: value };
  }
  // @GrpcMethod('AuthService', 'RegisterUser')
  // registerUser(data: { email: string; password: string }) {
  //   this.authService.create({ email: data.email, password: data.password });
  //   return { token: null, userId: null };
  // }
}
