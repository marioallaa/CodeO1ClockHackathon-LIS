import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MediaEntity } from '../media/media.entity';

@Entity()
export class MessageEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @Column()
  senderId: number;

  @Column()
  groupId: number;

  @OneToMany(() => MediaEntity, photos => photos.id)
  photos: MediaEntity[];

}
