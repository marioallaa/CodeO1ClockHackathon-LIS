import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MediaEntity } from '../media/media.entity';

@Entity()
export class GroupEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

}
