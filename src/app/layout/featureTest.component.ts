import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../login.service';

@Component({
    selector: 'app-feature-test',
    templateUrl: './featureTest.component.html',
    styleUrls: ['./featureTest.component.scss']
})
export class FeatureTestComponent implements OnInit {


    constructor(private router: Router, private loginService: LoginService) {
    }

    ngOnInit(): void {
    }

}