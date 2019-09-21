import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "./user.entity";
import {Repository} from "typeorm";
import {CreateUserDto} from "./dto/create.user.dto";
import {Hash} from "crypto";

@Injectable()
export class UserService {

    private readonly u: any;
    constructor(
        @InjectRepository(UserEntity)
        private readonly user : Repository<UserEntity>
    ){
        this.u = [
            {
                userId: 1,
                username: 'john',
                password: 'changeme',
            },
            {
                userId: 2,
                username: 'chris',
                password: 'secret',
            },
            {
                userId: 3,
                username: 'maria',
                password: 'guess',
            },
        ];

    }

    async registerNew(data: CreateUserDto){
        let d: UserEntity = this.user.create(data);
        return await this.user.save(d)
    }


    findAll(): Promise<UserEntity[]> {
        return this.user.find({})
    }


    deleteOne(username: string){
        return this.user.delete({username: username})    }


    updateOne(username: string, data: CreateUserDto){
        let d: UserEntity = this.user.create(data);
        this.user.update({username:username}, d)
    }

    async findOne(username: string): Promise<any | undefined> {
        return this.user.findOne({username: username})
    }
}

