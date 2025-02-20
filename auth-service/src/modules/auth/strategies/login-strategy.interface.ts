import { LoginDto } from '../dto/login.dto';
export interface LoginStrategy {
  login(loginDto: LoginDto): Promise<string>;
}
