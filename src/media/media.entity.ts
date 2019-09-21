import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MediaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mediaUrl: string;
}
