import {HttpService, Injectable} from '@nestjs/common';
import {map} from "rxjs/operators";
import { of } from 'rxjs';
let ioClient = require('socket.io-client');
@Injectable()
export class ChatService {
    constructor(private http: HttpService){    }


        async getchat(msg){
            return this.http.get('http://localhost:8080/chat/' + msg)
                .pipe(
                    map(response =>  response.data.response,)
                );
    }

    async chat(msg){
        return  this.http.get('http://localhost:8080/chat/' + msg)

    }
}
