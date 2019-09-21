import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UserService} from './user.service';
import {Request} from '@nestjs/common';
import {RegisterDto} from './user.dto/register.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('new')
    createUser(@Body() data: RegisterDto) {
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
    updateUser(@Body() data: RegisterDto, @Param('username') username) {
        return this.userService.updateOne(username, data);
    }

    @Get('all')
    getAll() {
        return this.userService.findAll();
    }

}
