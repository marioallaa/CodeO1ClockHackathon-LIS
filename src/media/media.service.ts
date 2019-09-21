import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MediaEntity } from './media.entity';
import { MediaDto } from './dto/media.dto';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(MediaEntity)
    private readonly mediaEntityRepository: Repository<MediaEntity>,
  ) { }

  async saveMedia(data: MediaDto) {
    const m: MediaEntity = this.mediaEntityRepository.create(data);
    return await this.mediaEntityRepository.save(m);
  }

  async deleteOne(id: number) {
    return this.mediaEntityRepository.delete({id});    }

  async updateOne(id: number, data: MediaDto) {
    const m: MediaEntity = this.mediaEntityRepository.create(data);
    this.mediaEntityRepository.update({id}, m);
  }

  async findOne(id: number): Promise<any | undefined> {
    return this.mediaEntityRepository.findOne({id});
  }

}
