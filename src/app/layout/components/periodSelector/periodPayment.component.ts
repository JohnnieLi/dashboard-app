import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from '../../../models/Message';
import {Plan} from '../../../models/Plan';

@Component({
    selector: 'app-period',
    templateUrl: './periodPayment.component.html',
    styleUrls: ['./periodPayment.component.scss'],
})
export class PeriodPaymentComponent implements OnInit {

    @Input()
    plan: Plan;
    @Input()
    service: any;
    selectedPeriod = 'monthly';

    @Output()
    send: EventEmitter<Message> = new EventEmitter<Message>();

    @Output()
    close: EventEmitter<boolean> = new EventEmitter<boolean>();

    annualFee = 0;
    annualSaving = 0;
    finalFee = 0;
    HST = 0;
    totalFee = 0;

    constructor() {
    }


    ngOnInit() {
        this.annualFee = this.plan.fee * this.plan.annualFeeDisAcount;
        this.annualSaving = (this.plan.fee - this.annualFee) * 12;
    }

    onPeriodSelected(period) {
        this.selectedPeriod = period;
        switch (this.selectedPeriod) {
            case 'monthly':
                this.finalFee = this.plan.fee * 12;
                break;
            case 'yearly':
                this.finalFee = this.annualFee * 12;
                break;
            default:
                this.finalFee = this.plan.fee * 12;
                break;
        }
        this.HST = this.finalFee * 1.13;
        this.totalFee = this.finalFee + this.HST;
    }

}
