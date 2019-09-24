import {Module} from '@nestjs/common';
import {ChatController} from './chat.controller';
import {ChatService} from './chat.service';
import {ChatGateway} from './chat.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageEntity } from './message.entity';
import { MediaModule } from '../media/media.module';
import { GroupEntity } from './group.entity';

@Module({
    imports: [
        MediaModule,
        TypeOrmModule.forFeature([MessageEntity, GroupEntity])],
    controllers: [ChatController],
    providers: [ChatService, ChatGateway],
    exports: [ChatModule],
})
export class ChatModule {}
