import { LoginDto } from '../dto/login.dto';
import { LoginStrategy } from './login-strategy.interface';

export class FacebookLoginStrategy implements LoginStrategy {
  login(loginDto: LoginDto): Promise<string> {
    return Promise.resolve('Logged in with Facebook');
  }
}
