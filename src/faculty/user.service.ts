import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UserEntity} from './user.entity';
import {Repository} from 'typeorm';
import {RegisterDto} from './user.dto/register.dto';
import {Hash} from 'crypto';

@Injectable()
export class UserService {

    private readonly u: any;
    constructor(
        @InjectRepository(UserEntity)
        private readonly user: Repository<UserEntity>,
    ) {
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

    async registerNew(data: RegisterDto) {
        const d: UserEntity = this.user.create(data);
        return await this.user.save(d);
    }

    findAll(): Promise<UserEntity[]> {
        return this.user.find({});
    }

    deleteOne(username: string) {
        return this.user.delete({username});    }

    updateOne(username: string, data: RegisterDto) {
        const d: UserEntity = this.user.create(data);
        this.user.update({username}, d);
    }

    async findOne(username: string): Promise<any | undefined> {
        return this.user.findOne({username});
    }
}
