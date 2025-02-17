import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LoginStrategyFactory } from './strategies/login-strategy.factory';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LoginStrategyFactory],
})
export class AuthModule {}
