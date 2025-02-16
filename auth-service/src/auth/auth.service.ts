import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginStrategyFactory } from './strategies/login-strategy.factory';

@Injectable()
export class AuthService {
  constructor(private readonly loginStrategyFactory: LoginStrategyFactory) {}

  login(strategyName: string, createAuthDto: CreateAuthDto): string {
    const strategy = this.loginStrategyFactory.create(strategyName);
    return strategy.login(createAuthDto);
  }
}
