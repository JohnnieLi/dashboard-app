import {Component, OnInit} from '@angular/core';
import {User, DashboardService} from '../dashboard.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'app-users',
    templateUrl: './adminsManager.component.html',
    styleUrls: ['./adminsManager.component.scss'],
    providers: [DashboardService]
})
export class AdminsManagerComponent implements OnInit {

    public adminUsers: User[];


    constructor(public dashService: DashboardService) {

    }


    ngOnInit() {

        this.dashService.getUsers(0).subscribe(
            data => {
                this.adminUsers = data.users;
            }
        );

    }


}