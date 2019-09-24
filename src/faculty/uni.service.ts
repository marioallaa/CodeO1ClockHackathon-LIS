import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Hash} from 'crypto';
import { ClassEntity } from './class.entity';
import { CreateNewClass } from './dto/create.class.dto';

@Injectable()
export class UniService {

    private readonly u: any;
    constructor(
        @InjectRepository(ClassEntity)
        private readonly user: Repository<ClassEntity>,
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

    async registerNew(data: CreateNewClass) {
        const d: ClassEntity = this.user.create(data);
        return await this.user.save(d);
    }

    findAll(): Promise<ClassEntity[]> {
        return this.user.find({});
    }

    deleteOne(uniId: string) {
        return this.user.delete({});    }

    updateOne(username: string, data: CreateNewClass) {
        const d: ClassEntity = this.user.create(data);
        this.user.update({}, d);
    }

    async findOne(username: string): Promise<any | undefined> {
        return this.user.findOne({});
    }
}
