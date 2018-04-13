import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../models/User';
import {Message} from '../../../models/Message';

@Component({
    selector: 'app-plan',
    templateUrl: './plan.component.html',
    styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {

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
