import { Body, Controller, Get, Param, Post, Render, UseGuards } from '@nestjs/common';
import {ChatService} from './chat.service';
import { Request } from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import { GetMessageDto } from './dto/get.message.dto';

@Controller('msg')
export class ChatController {

    constructor(private chat: ChatService) {  }

    // @UseGuards(AuthGuard('jwt'))
    @Get('/')
    async getMessage(@Request() req, @Param('msg') msg) {
            console.log(msg);
            return  this.chat.findAll();
    }

  @Post('send')
  createUser(@Body() data: GetMessageDto) {
    return this.chat.saveMessage(data);

  }



}

