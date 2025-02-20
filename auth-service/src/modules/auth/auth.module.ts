import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthController } from './auth.controller';
import { LoginStrategyFactory } from './strategies/login-strategy.factory';
import { EmailService } from '../email/email.service';
import { UserModule } from '../user/user.module';
import { OtpService } from './service/otp.service';
import { TokenService } from './service/token.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, ConfigModule.forRoot()],
  controllers: [AuthController],
  providers: [
    AuthService,
    EmailService,
    OtpService,
    TokenService,
    JwtService,
    LoginStrategyFactory,
  ],
})
export class AuthModule {}
