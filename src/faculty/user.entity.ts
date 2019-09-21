import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  role: number;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column({unique: true})
  username: string;

  @Column()
  password: string;

  @Column()
  photoUrl: string;

}

