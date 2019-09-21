import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import {LocalStrategy} from './local.strategy';
import { AuthController } from './auth.controller';
import {JwtModule} from '@nestjs/jwt';
import {jwtConstants} from './consts';
import {JwtStrategy} from './jwt.strategy';

@Module({
  imports: [
      UserModule
  ,
      PassportModule
  ,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '31d' },
    }),
  ],
  providers: [
      AuthService
  ,
    LocalStrategy
  ,
      JwtStrategy,

  ],
  controllers: [
      AuthController,
  ],
})
export class AuthModule {}
