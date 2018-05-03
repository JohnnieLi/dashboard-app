import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Plan} from '../../../models/Plan';

declare let introJs: Function;

@Component({
    selector: 'app-plan',
    templateUrl: './plan.component.html',
    styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {

    @Input()
    plans: Plan[];
    @Input()
    service: any;
    @Input()
    type = 3; // 1:display  2:first time select  3:change plan

    selectedGrade = 0;
    @Output()
    selected: EventEmitter<any> = new EventEmitter<any>();

    constructor(public router: Router) {
    }

    ngOnInit() {
        if (this.type === 3) {
            if (localStorage.getItem('currentUser')) {
                const currentUser = JSON.parse(localStorage.getItem('currentUser'));
                if (currentUser.grade) {
                    this.selectedGrade = currentUser.grade;
                }
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

    onPlanSelected(plan) {
        this.selected.emit(plan);
    }


    onintroJsClick() {
        const intro = introJs();
        intro.setOptions({
            steps: [
                {
                    intro: 'Hello world!'
                },
                {
                    element: document.querySelector('#step1'),
                    intro: 'This is a tooltip.'
                },
                {
                    element: document.querySelectorAll('#step2')[0],
                    intro: "Ok, wasn't that fun?",
                    position: 'right'
                },
                {
                    element: '#step3',
                    intro: 'More features, more fun.',
                    position: 'left'
                },
            ]
        });
        intro.start();
        introJs().start();
    }


}
