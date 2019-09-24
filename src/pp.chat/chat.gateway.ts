import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client, Server } from 'socket.io';
import {ChatService} from './chat.service';
import { SendMessageDto } from './dto/send.message.dto';

@WebSocketGateway({})
export class ChatGateway {
    @WebSocketServer()
    server: Server;

    constructor(
                private service: ChatService) {
    }

    @SubscribeMessage('events')
    findAll(client: Client, data: any): Observable<WsResponse<number>> {
        return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
    }

    @SubscribeMessage('identity')
    async identity(client: Client, data: number): Promise<number> {
        return data;
    }

    @SubscribeMessage('message')
    async msg(client: Client, data: SendMessageDto) {
    return data;
    }

}
