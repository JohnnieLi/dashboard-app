import {Component, OnInit} from '@angular/core';
import {User, DashboardService} from '../dashboard.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'app-users',
    templateUrl: './usersManager.component.html',
    styleUrls: ['./usersManager.component.scss'],
    providers: [DashboardService]
})
export class UserManagerComponent implements OnInit {

    public normalUsers: User[];
    public businessUsers: User[];

    public firstNameSearchText: String;
    public lastNameSearchText: String;
    public statusSearchNumber: number;
    public usernameSearchText: String;
    public authTypeSearchText: String;

    constructor(public dashService: DashboardService) {

    }


    ngOnInit() {

        this.dashService.getUsers(0).subscribe(
            data => {
                this.normalUsers = data.users;
            }
        );
        this.dashService.getUsers(1).subscribe(
            data => {
                this.businessUsers = data.users;
            }
        );
    }


}