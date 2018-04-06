import {User} from './User';

export class Notification {
    date: Date;
    title: string;
    content: string;
    type: string;
    content_id: string;
    content_objectId: string; // for message
    content_from: string; // for comments
    readed: Boolean;
    status: Number;
    fromUser: User;
    toUser: User;
    _id: string;
}