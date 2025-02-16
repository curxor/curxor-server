import { LoginStrategy } from './login-strategy.interface';
import { CreateAuthDto } from '../dto/create-auth.dto';

export class EmailLoginStrategy implements LoginStrategy {
  login(createAuthDto: CreateAuthDto): string {
    return `Logged in with email: ${createAuthDto.email}`;
  }
}
