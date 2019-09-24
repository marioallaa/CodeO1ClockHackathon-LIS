import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MessageEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @Column()
  senderId: number;

  @Column()
  sentTime: string;

  @Column()
  groupId: number;

  @Column()
  photoUrl: string;

}

