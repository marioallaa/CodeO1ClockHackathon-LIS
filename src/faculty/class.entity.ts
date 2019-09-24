import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ClassEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  className: string;

  @Column()
  facultyId: number;

  @Column()
  teacherId: number;

  @Column()
  weekDay: number;

  @Column()
  schoolHour: number;

  @Column({unique: true})
  universityName: string;

}

