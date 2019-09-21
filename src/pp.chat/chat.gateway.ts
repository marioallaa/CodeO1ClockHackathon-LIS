import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client, Server } from 'socket.io';
import {ChatService} from "./chat.service";

@WebSocketGateway({})
export class ChatGateway {
    @WebSocketServer()
    server: Server;

    constructor(
                private service: ChatService){
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
    async msg(client: Client, data: any){
        let chat: any = await this.service.chat(data);
        chat.subscribe(res=>{
                console.log('response: ', res.data);
                client.emit('message', res.data.response)
                return 0
            }, error => {
                console.log('error: ', error);
                client.emit('error', error)
                return 0
            }, () => {
                console.log('completed!');
                return 0
            }
        )
    }

}
