import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../login.service';
import {Plan} from '../../models/Plan';

@Component({
    selector: 'app-premium-payment',
    templateUrl: './premiumPlanPayment.component.html',
    styleUrls: ['./premiumPlanPayment.component.scss']
})
export class PremiumPlanPaymentComponent implements OnInit, OnDestroy {

    private sub: any;
    plans: Plan[];
    plan: Plan;
    step: number;
    palnSelectorType: number;

    constructor(private router: Router, private route: ActivatedRoute, private loginService: LoginService) {

    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.step = +params['step']; // (+) converts string 'id' to a number
            if (this.step === 1) {
                this.hardCodePlans();
                this.plan = null;
                this.palnSelectorType = 2; // plan selector: new select
                if (localStorage.getItem('currentUser')) {
                    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    if (currentUser.grade) {
                        this.palnSelectorType = 2; // plan selector: change select
                    }
                }
            }
            if (this.step === 2) {
                if (localStorage.getItem('currentUser')) {
                    this.hardCodePlans();
                    this.plan = this.plans[2];
                }
            }
        });
    }

    onPlanSelected(event) {
        console.log('onPlanSelected', event);
        if (event) {
            this.step = 2;
            this.plan = event;
        }
    }

    goToStpe1(event) {
        if (event) {
            this.step = 1;
            this.plan = null;
        }
    }

    goToPage(pageNum) {
        this.router.navigate(['/premiumPlan'], {queryParams: {step: pageNum}});
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    hardCodePlans() {
        this.plans = [];
        const plan1 = new Plan();
        plan1.title = 'VIP';
        plan1.subTitle = 'Everything and more';
        plan1.fee = 25;
        plan1.features = ['UNLIMITED Bandwidth', '20GB Storage', 'Remove Wix Ads', 'Connect Your Domain', 'Free Domain for 1 Year'];
        plan1.grade = 1;
        this.plans.push(plan1);

        const plan2 = new Plan();
        plan2.title = 'eCommerce';
        plan2.subTitle = 'Best for small businesses';
        plan2.fee = 17;
        plan2.features = ['UNLIMITED Bandwidth', '20GB Storage', 'Remove Wix Ads', 'Connect Your Domain'];
        plan2.grade = 2;
        this.plans.push(plan2);

        const plan3 = new Plan();
        plan3.title = 'Unlimited';
        plan3.subTitle = 'Enterpreneur & Freelancers';
        plan3.fee = 14;
        plan3.grade = 3;
        plan3.isPopular = true;
        plan3.features = ['UNLIMITED Bandwidth', '10GB Storage', 'Connect Your Domain'];
        this.plans.push(plan3);

        const plan4 = new Plan();
        plan4.title = 'Combo';
        plan4.subTitle = 'Personal use';
        plan4.fee = 10;
        plan4.grade = 4;
        plan4.features = ['UNLIMITED Bandwidth', '10GB Storage'];
        this.plans.push(plan4);
    }

}