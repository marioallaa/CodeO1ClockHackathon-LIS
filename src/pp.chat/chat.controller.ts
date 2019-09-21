import {Controller, Get, Param, Render, UseGuards} from '@nestjs/common';
import {ChatService} from './chat.service';
import { Request } from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';

@Controller('send')
export class ChatController {

    constructor(private chat: ChatService) {  }

    @UseGuards(AuthGuard('jwt'))
    @Get('/:msg')
    async getMessage(@Request() req, @Param('msg') msg) {
            console.log(msg);
            return  (msg);
    }

}

