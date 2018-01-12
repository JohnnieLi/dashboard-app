import { Component, OnInit,Input } from '@angular/core';
import {Profile, DashboardService} from '../../dashboard.service'

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    providers:[DashboardService]
})
export class ProfileComponent implements OnInit {

    @Input() profile: Profile

    constructor(public dashboardService: DashboardService) { }
    
    ngOnInit() { }
}
