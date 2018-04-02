import {User} from './User';

export class Message {
    id: string;
    fromUser: User;
    toUser: User;
    subject: string;
    topic_id: string;
    content: string;
    date: Date;
    status: number;
    email: string;
}


