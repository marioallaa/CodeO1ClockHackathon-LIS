import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateNewClass {
  @IsNotEmpty()
  className: string;

  @IsNotEmpty()
  facultyId: number;

  @IsNotEmpty()
  teacherId: number;

  @IsNotEmpty()
  weekDay: number;

  @IsNotEmpty()
  schoolHour: number;

  @IsEmail()
  universityName: string;

}
