import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {User} from '../../../models/User';
import {Message} from '../../../models/Message';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnChanges {

    @Input()
    messages: Message[];
    @Input()
    service: any;

    typingMessage: string;
    recipient: User;
    selfUser: User;
    subject: string;
    topic_id: string;

    @Output()
    send: EventEmitter<Message> = new EventEmitter<Message>();

    @Output()
    close: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {
    }


    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.getRecipient();
        this.typingMessage = '';
        console.log('ngOnChanges', this.recipient);
        console.log('ngOnChanges', this.selfUser);
    }

    getRecipient() {
        this.selfUser = this.getSelfUser();
        if (this.selfUser && this.messages) {
            const fromUser = this.messages[0].fromUser;
            const toUser = this.messages[0].toUser;
            if (fromUser._id === this.selfUser._id) {
                this.recipient = toUser;
            } else {
                this.recipient = fromUser;
            }
            this.subject = this.messages[0].subject;
            this.topic_id = this.messages[0].topic_id;
        } else {
            return null;
        }
    }


    getSelfUser() {
        if (localStorage.getItem('currentUser')) {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            const selfUser = new User();
            selfUser._id = currentUser._id;
            selfUser.username = currentUser.username;
            selfUser.firstName = currentUser.firstName;
            return selfUser;
        } else {
            return null;
        }
    }

    sendMessage() {
        if (this.recipient && this.typingMessage !== '') {
            const newMessage = new Message();
            newMessage.fromUser = this.selfUser;
            newMessage.toUser = this.recipient;
            newMessage.subject = this.subject;
            newMessage.topic_id = this.topic_id;
            newMessage.date = new Date();
            newMessage.content = this.typingMessage;
            newMessage.status = 1;
            this.service.sendMessage(newMessage).subscribe(response => {
                if (response.success) {
                    this.messages.push(newMessage);
                    this.typingMessage = '';
                }
            });
        } else {
        }
    }

    closeWindow() {
        this.close.emit(true);
    }


}
