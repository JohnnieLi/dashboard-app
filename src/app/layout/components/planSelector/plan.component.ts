import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from '../../../models/Message';
import {Router} from '@angular/router';

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
    @Input()
    type = 2; // 1:display  2:first time select  3:change plan

    selectedCategory = 0;
    @Output()
    send: EventEmitter<Message> = new EventEmitter<Message>();

    @Output()
    close: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(public router: Router) {
    }

    ngOnInit() {
        if (this.type === 3) {
            if (localStorage.getItem('currentUser')) {
                const currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.selectedCategory = 2;
            }
        }

    }

    onPremiumUserClicked() {
        const currentUser = localStorage.getItem('currentUser');
        if (!currentUser) {
            this.router.navigate(['/login']);
        } else {
            this.router.navigate(['/account/step1']);
        }
    }

    onPlanSelected(category) {
        console.log(category);
    }


}
