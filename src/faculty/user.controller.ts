import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UniService} from './uni.service';
import {Request} from '@nestjs/common';
import { CreateNewClass } from 'src/faculty/dto/create.class.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UniService) {}

    @Post('new')
    createUser(@Body() data: CreateNewClass) {
         return this.userService.registerNew(data);

    }
    @Get('/:username')
    getUser(@Request() req, @Param('username') username) {
        return this.userService.findOne(username);
    }

    @Delete('/:username')
    deleteUser(@Request() req, @Param('username') username) {
        return this.userService.deleteOne(username);
    }

    @Put('/:username')
    updateUser(@Body() data: CreateNewClass, @Param('username') username) {
        return this.userService.updateOne(username, data);
    }

    @Get('all')
    getAll() {
        return this.userService.findAll();
    }

}
