
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MessageEntity } from './message.entity';
import { SendMessageDto } from './dto/send.message.dto';
import { Injectable } from '@nestjs/common';
import { GroupEntity } from './group.entity';
import { CreateGroupDto } from './dto/create.group.dto';

@Injectable()
export class ChatService {
    constructor(
      @InjectRepository(MessageEntity)
      private readonly messageEntityRepository: Repository<MessageEntity>,
      @InjectRepository(MessageEntity)
      private readonly groupEntityRepository: Repository<GroupEntity>,
    ) { }

    async saveMessage(data: SendMessageDto) {
        const m: MessageEntity = this.messageEntityRepository.create(data);
        return await this.messageEntityRepository.save(m);
    }

    async saveGroup(data: CreateGroupDto) {
        const g: GroupEntity = this.groupEntityRepository.create(data);
        return await this.groupEntityRepository.save(g);
    }

    async deleteOne(id: number) {
        return await this.messageEntityRepository.delete({id});    }

    async updateOne(id: number, data: SendMessageDto) {
        const m: MessageEntity = this.messageEntityRepository.create(data);
        return await this.messageEntityRepository.update({ id }, m);
    }

    async findAll() {
        return await this.messageEntityRepository.find();
    }

    async findGroups() {
        return await this.groupEntityRepository.find();
    }
    async findAllGroups() {
        const messages: MessageEntity[] =  await this.messageEntityRepository.find();
        let groups: number[] = [];
        for (const m of messages) {
            if (!groups.includes(m.groupId)) {
                groups.push(m.groupId);
            }
        }
        return groups;
    }
    async findByGroupId( ) {
        let gr: GroupEntity[] = await this.groupEntityRepository.find();
        let map = [[]];
        let ff: number[] = this.findAllGroups();
        for (const g of ff) {
            let message = await this.getLastMessageFromGroup(g);
            console.log(message);
            if (message) {
                map.push([g, message]);
            }
        }
        return {data: map};
    }

    async findByUID(id: number ) {
        return await this.messageEntityRepository.find({senderId: id});
    }
    async findByGrId(id: number ) {
        return await this.messageEntityRepository.find({groupId: id});
    }
    async getLastMessageFromGroup(id: number ) {
        let f = await this.messageEntityRepository.find({groupId: id});
        return f.pop();

    }

    async findOne(id: number): Promise<any | undefined> {
        return await this.messageEntityRepository.findOne({id});
    }

}
