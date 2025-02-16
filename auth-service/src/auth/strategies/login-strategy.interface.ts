import { CreateAuthDto } from '../dto/create-auth.dto';

export interface LoginStrategy {
  login(createAuthDto: CreateAuthDto): string;
}
