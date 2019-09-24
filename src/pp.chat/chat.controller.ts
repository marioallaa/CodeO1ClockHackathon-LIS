import { Body, Controller, Get, Param, Post, Render, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import {ChatService} from './chat.service';
import { Request } from '@nestjs/common';
import { SendMessageDto } from './dto/send.message.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateGroupDto } from './dto/create.group.dto';

@Controller('msg')
export class ChatController {

    constructor(private chat: ChatService) {  }

  // @UseGuards(AuthGuard('jwt'))
  @Get('/')
  async getMessage(@Request() req, @Param('msg') msg) {
    console.log(msg);
    return  this.chat.findAll();
  }
  // @UseGuards(AuthGuard('jwt'))
  @Get('groups')
  async getAllGrups() {
    return  this.chat.findAllGroups();
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get('gr')
  async getGroups() {
    return  this.chat.findGroups();
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get('group/:id')
  async getMessagesFromGroup(@Request() req, @Param('id') id) {
    return  this.chat.findByGrId(id);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get('grs')
  async getGrs(@Request() req, @Param('id') id) {
    return  this.chat.findByGroupId();
  }
    // @UseGuards(AuthGuard('jwt'))
    @Get('user/:id')
    async getMyMsg(@Request() req, @Param('id') id) {
            return  this.chat.findByUID(id);
    }

  @Post('uploadPhoto')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file) {
    const dateTime = Date.now();
    const fs = require('fs');
    // tslint:disable-next-line:only-arrow-functions
    fs.writeFile('media/photos/' + dateTime.toString() + '.jpg', file, function(err) {
      if (err) {
        return console.log(err);
      }

      console.log('The file was saved!');
    });
    return {status: 'saved', url: 'someurl' + dateTime.toString()};
  }

  @Post('createGroup')
  CreateGroups(@Body() data: CreateGroupDto) {
    return this.chat.saveGroup(data);
  }

  @Post('send')
  createUser(@Body() data: SendMessageDto) {
    if ( this.chat.findByGrId(data.groupId).then(() => {
      this.chat.saveMessage(data);
    })) {
      return {status: 'saved'};
    } else {
      return {status: 'unknownGroup'};
    }

  }

}
