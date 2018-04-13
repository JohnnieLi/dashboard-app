import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../models/User';
import {Message} from '../../../models/Message';

@Component({
    selector: 'app-period',
    templateUrl: './periodPayment.component.html',
    styleUrls: ['./periodPayment.component.scss'],
})
export class  PeriodPaymentComponent implements OnInit {

    @Input()
    messages: Message[];
    @Input()
    service: any;


    @Output()
    send: EventEmitter<Message> = new EventEmitter<Message>();

    @Output()
    close: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {
    }


    ngOnInit() {
    }


}
