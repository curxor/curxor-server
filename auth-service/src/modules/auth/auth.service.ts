import { Injectable } from '@nestjs/common';
import { LoginStrategyFactory } from './strategies/login-strategy.factory';
import { LoginDto } from './dto/login-dto';

@Injectable()
export class AuthService {
  constructor(private readonly loginStrategyFactory: LoginStrategyFactory) {}

  login(strategyName: string, loginDto: LoginDto): Promise<string> {
    const strategy = this.loginStrategyFactory.create(strategyName);
    return strategy.login(loginDto);
  }
}
