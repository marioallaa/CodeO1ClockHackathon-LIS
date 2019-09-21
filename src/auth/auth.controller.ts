import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import {Request} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {LoginUserDto} from "../user/dto/login.user.dto";

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @UseGuards(AuthGuard('local'))
    @Get('login')
    index(){
        return {"hello": 'idk'}
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Body() data: LoginUserDto) {
        console.log(data);
        return this.authService.login(data);
    }


    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    getProfile(@Request() req) {
        return req.user;
    }
}
