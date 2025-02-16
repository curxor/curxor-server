import { Injectable } from '@nestjs/common';
import { LoginStrategy } from './login-strategy.interface';
import { EmailLoginStrategy } from './email-login.strategy';
import { GoogleLoginStrategy } from './google-login.strategy';
import { FacebookLoginStrategy } from './facebook-login.strategy';
@Injectable()
export class LoginStrategyFactory {
  create(strategyName: string): LoginStrategy {
    switch (strategyName) {
      case 'email':
        return new EmailLoginStrategy();
      case 'google':
        return new GoogleLoginStrategy();
      case 'facebook':
        return new FacebookLoginStrategy();
      default:
        throw new Error(`Login strategy ${strategyName} not supported`);
    }
  }
}
