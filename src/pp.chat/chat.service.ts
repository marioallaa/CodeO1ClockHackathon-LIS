import {HttpService, Injectable} from '@nestjs/common';
@Injectable()
export class ChatService {
    constructor() {    }

    async chat(msg) {
        return 'hello';

    }
}
