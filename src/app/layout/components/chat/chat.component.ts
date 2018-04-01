import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {User} from '../../dashboard.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnChanges {

    @Input()
    messages: Message[];

    typingMessage: string;
    recipient: User;

    @Output()
    send: EventEmitter<Message> = new EventEmitter<Message>();


    constructor() {
    }


    ngOnInit() {
        this.messages = genernateMessages();
    }

    ngOnChanges(changes: SimpleChanges): void {
    }


    sendMessage() {
        const newMessage = new Message();
        newMessage.content = this.typingMessage;
        console.log(newMessage);
        this.send.emit(newMessage);
    }
}


/** Constants used to fill up our data base. */


/** Builds and returns a new User. */
function genernateMessages(): Message[] {
    const msgs = [];
    for (let i = 0; i < 3; i++) {
        const message = {
            id: IDS[i],
            name: NAMES[i],
            content: CONTENTS[i],
            date: Date(),
        };
        msgs.push(message);
    }
    return msgs;
}

const IDS = ['1', '2', '3'];
const NAMES = ['maroon', 'red', 'orange'];
const CONTENTS = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.',
];

export class Message {
    id: string;
    name: string;
    content: string;
    date: Date;
}
