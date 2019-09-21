
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MessageEntity } from './message.entity';
import { GetMessageDto } from './dto/get.message.dto';
import { Injectable } from '@nestjs/common';
import { MediaService } from '../media/media.service';

@Injectable()
export class ChatService {
    constructor(
      @InjectRepository(MessageEntity)
      private readonly messageEntityRepository: Repository<MessageEntity>,
      private readonly mediaService: MediaService,
    ) { }

    async saveMessage(data: GetMessageDto) {
        const m: MessageEntity = this.messageEntityRepository.create(data);
        return await this.messageEntityRepository.save(m);
    }

    async deleteOne(id: number) {
        return await this.messageEntityRepository.delete({id});    }

    async updateOne(id: number, data: GetMessageDto) {
        const m: MessageEntity = this.messageEntityRepository.create(data);
        return await this.messageEntityRepository.update({ id }, m);
    }

    async findAll() {
        return await this.messageEntityRepository.find();
    }

    async findOne(id: number): Promise<any | undefined> {
        return await this.messageEntityRepository.findOne({id});
    }

}
