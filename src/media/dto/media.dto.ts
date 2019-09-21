import { IsNotEmpty } from 'class-validator';

export class MediaDto {

  @IsNotEmpty()
  mediaUrl: string;

}
