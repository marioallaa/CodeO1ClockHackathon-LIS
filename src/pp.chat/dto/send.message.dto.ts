import { IsDate, IsNotEmpty } from 'class-validator';

export class SendMessageDto {

  @IsNotEmpty()
  message: string;

  @IsNotEmpty()
  senderId: number;

  @IsNotEmpty()
  sentTime: string;

  @IsNotEmpty()
  groupId: number;

  @IsNotEmpty()
  photoUrl: string;

}
