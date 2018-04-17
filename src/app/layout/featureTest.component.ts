import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';
import {Plan} from '../models/Plan';

@Component({
    selector: 'app-feature-test',
    templateUrl: './featureTest.component.html',
    styleUrls: ['./featureTest.component.scss']
})
export class FeatureTestComponent implements OnInit {


    plans: Plan[];
    plan: Plan;

    constructor(private router: Router, private loginService: LoginService) {
        this.hardCodePlans();
        this.plan = this.plans[2];

    }

    ngOnInit(): void {
    }

    hardCodePlans() {
        this.plans = [];
        const plan1 = new Plan();
        plan1.title = 'VIP';
        plan1.subTitle = 'Everything and more';
        plan1.fee = 25;
        plan1.features = ['UNLIMITED Bandwidth', '20GB Storage', 'Remove Wix Ads', 'Connect Your Domain', 'Free Domain for 1 Year'];
        plan1.category = 1;
        this.plans.push(plan1);

        const plan2 = new Plan();
        plan2.title = 'eCommerce';
        plan2.subTitle = 'Best for small businesses';
        plan2.fee = 17;
        plan2.features = ['UNLIMITED Bandwidth', '20GB Storage', 'Remove Wix Ads', 'Connect Your Domain'];
        plan2.category = 2;
        this.plans.push(plan2);

        const plan3 = new Plan();
        plan3.title = 'Unlimited';
        plan3.subTitle = 'Enterpreneur & Freelancers';
        plan3.fee = 14;
        plan3.category = 3;
        plan3.isPopular = true;
        plan3.features = ['UNLIMITED Bandwidth', '10GB Storage', 'Connect Your Domain'];
        this.plans.push(plan3);

        const plan4 = new Plan();
        plan4.title = 'Combo';
        plan4.subTitle = 'Personal use';
        plan4.fee = 10;
        plan4.category = 4;
        plan4.features = ['UNLIMITED Bandwidth', '10GB Storage'];
        this.plans.push(plan4);
    }

}