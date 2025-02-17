import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-dto';
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @GrpcMethod('AuthService', 'LoginUser')
  loginUser(data: { type: string } & LoginDto) {
    const token = this.authService.login(data.type, data);
    return {
      token: token,
      message: 'User logged in successfully',
      status: 200,
    };
  }
  // @GrpcMethod('AuthService', 'Auth')
  // authUser(data: { email: string; password: string; type: string }) {
  //   const value = this.authService.login(data.type, data);
  //   return { token: null, data: value };
  // }
}
