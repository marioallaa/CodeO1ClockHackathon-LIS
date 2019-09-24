import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import {UniService} from './uni.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ClassEntity} from './class.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClassEntity])],
  controllers: [UserController],
  providers: [UniService],
  exports: [UniModule, UniService],
})
export class UniModule {}
