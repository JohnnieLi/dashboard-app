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
    public addAdminHidden: boolean;
    public adminProfileHidden: boolean;

    constructor(public dashService: DashboardService) {

    }


    ngOnInit() {
        this.addAdminHidden = true;
        this.adminProfileHidden = true;
        this.dashService.getUsers(0).subscribe(
            data => {
                this.adminUsers = data.users;
            }
        );

    }



    addUserClick() {
        this.addAdminHidden = false;
        this.adminProfileHidden = true;
    }

    submitAdminClicked() {
        this.addAdminHidden = true;
        this.adminProfileHidden = true;
    }

    cancelAdminClicked(){
        this.addAdminHidden = true;
        this.adminProfileHidden = true;
    }

    adminClick() {
        this.adminProfileHidden = false;
        this.addAdminHidden = true;
    }


}