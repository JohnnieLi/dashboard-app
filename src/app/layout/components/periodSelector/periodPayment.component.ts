import {Component, Inject, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Plan} from '../../../models/Plan';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

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
    completedPayment: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output()
    back: EventEmitter<boolean> = new EventEmitter<boolean>();

    annualFee = 0;
    annualSaving = 0;
    HST = 0;
    originalFee = 0; // originalFee = monthly fee Or annualFee(12 months)
    promoDiscount = 1;
    finalFee = 0;  // originalFee * promoDiscount
    totalFee = 0; // finalFee + HST: the fee need to paid
    completedPurchase = false;

    special = false;


    constructor(public dialog: MatDialog) {
    }


    ngOnInit() {
        console.log(this.plan);
        this.annualFee = +((this.plan.fee * 1) * (this.plan.annualFeeDiscount * 1)).toFixed(2);
        this.annualSaving = +((this.plan.fee - this.annualFee) * 12).toFixed(2);
        this.originalFee = this.plan.fee;
        this.finalFee = this.originalFee * this.promoDiscount;
        this.HST = +(this.originalFee * 0.13).toFixed(2);
        this.totalFee = this.finalFee + this.HST;
    }

    onPeriodSelected(period) {
        this.selectedPeriod = period;
        switch (this.selectedPeriod) {
            case 'Monthly':
                this.originalFee = this.plan.fee;
                this.finalFee = +(this.originalFee * this.promoDiscount).toFixed(2);
                break;
            case 'Yearly':
                this.originalFee = +(this.annualFee * 12).toFixed(2);
                this.finalFee = +(this.originalFee * this.promoDiscount).toFixed(2);
                break;
            default:
                this.originalFee = this.plan.fee;
                this.finalFee = +(this.originalFee * this.promoDiscount).toFixed(2);
                break;
        }
        this.HST = +(this.originalFee * 0.13).toFixed(2);
        this.totalFee = this.finalFee + this.HST;
    }

    openDialog() {
        const dialogRef = this.dialog.open(PromoDialogComponent, {
            // width: '250px',
            // data: { : this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
            switch (result) {
                case 0:
                    this.special = true;
                    break;
                default:
                    this.promoDiscount = result;
                    break;
            }
            this.finalFee = +(this.originalFee * this.promoDiscount).toFixed(2);
            this.totalFee = this.finalFee + this.HST;
            console.log(this.special);
        });
    }


    openCheckout() {
        // https://stripe.com/docs/checkout#integration-custom
        const self = this;
        const handler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
            locale: 'auto',
            token: function (token: any) {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
                console.log(token);
                self.completedPurchase = true;
                self.completedPayment.emit(true);
            }
        });

        handler.open({
            name: 'Premium Plan -' + this.plan.title,
            description: this.selectedPeriod,
            amount: this.totalFee * 100
        });
    }

    innerPromotion(){

    }

    goBack() {
        this.back.emit(true);
    }
}


@Component({
    selector: 'app-promo-dialog',
    templateUrl: './promo-dialog.html',
})
export class PromoDialogComponent {

    code: string;
    discount = 1;

    constructor(public dialogRef: MatDialogRef<PromoDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    submit() {
        this.discount = 0;
        this.dialogRef.close(this.discount);
    }

    onNoClick(): void {
        this.dialogRef.close(1);
    }

}