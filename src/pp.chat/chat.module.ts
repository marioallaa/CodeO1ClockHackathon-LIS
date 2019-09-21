import {HttpModule, Module} from '@nestjs/common';
import {ChatController} from "./chat.controller";
import {ChatService} from "./chat.service";
import {ChatGateway} from "./chat.gateway";
let io = require('socket.io-client');
@Module({
    imports: [HttpModule, ],
    controllers: [ChatController],
    providers: [ChatService, ChatGateway],
    exports: [ChatModule]
})
export class ChatModule {}
