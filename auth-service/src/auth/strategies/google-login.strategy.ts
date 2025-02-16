import { LoginStrategy } from './login-strategy.interface';
import { CreateAuthDto } from '../dto/create-auth.dto';

export class GoogleLoginStrategy implements LoginStrategy {
  login(createAuthDto: CreateAuthDto): string {
    return 'Logged in with Google';
  }
}
