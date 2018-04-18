import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../dashboard.service';
import {PaginationHelper} from '../../helpers/pagination.helper';
import {User} from '../../models/User';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginService} from '../../login.service';

@Component({
    selector: 'app-users',
    templateUrl: './usersManager.component.html',
    styleUrls: ['./usersManager.component.scss'],
    providers: [DashboardService, LoginService]
})
export class UserManagerComponent implements OnInit {

    public normalUsers: User[];
    public businessUsers: User[];

    public firstNameSearchText: string;
    public lastNameSearchText: string;
    public statusSearchNumber: number;
    public usernameSearchText: string;
    public authTypeSearchText: string;
    public loginLink: string;
    public nPHelper: PaginationHelper;
    public bPHelper: PaginationHelper;


    constructor(public dashService: DashboardService,
                public loginService: LoginService,
                private modalService: NgbModal) {
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

    loginAs(_id, content) {
        console.log(_id);
        this.loginService.loginAs(_id).subscribe(response => {
            if (response.success){
                const token = response.result;
                this.loginLink = 'http://localhost:4200/continue?token=' + token;
            }
        })
        this.open(content);
    }

    open(content) {
        this.modalService.open(content);
    }


}
