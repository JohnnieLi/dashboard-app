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
    selectedPeriod = 'Monthly';

    @Output()
    send: EventEmitter<Message> = new EventEmitter<Message>();

    @Output()
    back: EventEmitter<boolean> = new EventEmitter<boolean>();

    annualFee = 0;
    annualSaving = 0;
    finalFee = 0;
    HST = 0;
    totalFee = 0;

    constructor() {
    }


    ngOnInit() {
        console.log(this.plan);
        this.annualFee = +((this.plan.fee * 1) * (this.plan.annualFeeDiscount * 1)).toFixed(2);
        this.annualSaving = +((this.plan.fee - this.annualFee) * 12).toFixed(2);
        this.finalFee = this.plan.fee;
        this.HST = +(this.finalFee * 0.13).toFixed(2);
        this.totalFee = this.finalFee + this.HST;
    }

    onPeriodSelected(period) {
        this.selectedPeriod = period;
        switch (this.selectedPeriod) {
            case 'Monthly':
                this.finalFee = this.plan.fee;
                break;
            case 'Yearly':
                this.finalFee = +(this.annualFee * 12).toFixed(2);
                break;
            default:
                this.finalFee = this.plan.fee;
                break;
        }
        this.HST = +(this.finalFee * 0.13).toFixed(2);
        this.totalFee = this.finalFee + this.HST;
    }

    openCheckout() {
        // https://stripe.com/docs/checkout#integration-custom
        const handler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
            locale: 'auto',
            token: function (token: any) {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
                console.log(token);
            }
        });

        handler.open({
            name: 'Premium Plan -' + this.plan.title,
            description: this.selectedPeriod,
            amount: this.totalFee * 100
        });
    }

    goBack(){
        this.back.emit(true);
    }
}
