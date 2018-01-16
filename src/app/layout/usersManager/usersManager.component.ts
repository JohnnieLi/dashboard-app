import {Component, OnInit} from '@angular/core';
import {DashboardService, User} from '../dashboard.service';
import {PaginationHelper} from '../../helpers/pagination.helper';

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

    public nPHelper: PaginationHelper;
    public bPHelper: PaginationHelper;


    constructor(public dashService: DashboardService) {
        this.nPHelper = new PaginationHelper();
        this.bPHelper = new PaginationHelper();
    }


    ngOnInit() {
        this.dashService.getUsers(0).subscribe(
            data => {
                this.normalUsers = data.users;
                this.nPHelper.initPageHelper(this.normalUsers);
            }
        );
        this.dashService.getUsers(1).subscribe(
            data => {
                this.businessUsers = data.users;
                this.bPHelper.initPageHelper(this.businessUsers, 10);
            }
        );
    }


}