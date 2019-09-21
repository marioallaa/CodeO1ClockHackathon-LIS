import {HttpModule, Module} from '@nestjs/common';
import {ChatController} from './chat.controller';
import {ChatService} from './chat.service';
import {ChatGateway} from './chat.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaService } from '../media/media.service';
import { MessageEntity } from './message.entity';
import { MediaModule } from '../media/media.module';

@Module({
    imports: [
        MediaModule,
        TypeOrmModule.forFeature([MessageEntity])],
    controllers: [ChatController],
    providers: [ChatService, ChatGateway],
    exports: [ChatModule],
})
export class ChatModule {}
