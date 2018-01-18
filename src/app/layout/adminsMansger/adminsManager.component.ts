import {Component, OnInit} from '@angular/core';
import {DashboardService, User} from '../dashboard.service';

@Component({
    selector: 'app-users',
    templateUrl: './adminsManager.component.html',
    styleUrls: ['./adminsManager.component.scss'],
    providers: [DashboardService]
})
export class AdminsManagerComponent implements OnInit {

    public adminUsers: User[];
    public selectedAdmin: SelectedAdmin;
    public addedAdmin: AddedAdmin;
    public addAdminHidden: boolean;
    public adminProfileHidden: boolean;
    public roleSelectorHidden: boolean;
    public roleRadiosValue = 90; // default role

    constructor(public dashService: DashboardService) {
        this.selectedAdmin = new SelectedAdmin();
        this.addedAdmin = new AddedAdmin();
    }


    ngOnInit() {
        this.addAdminHidden = true;
        this.adminProfileHidden = true;
        this.roleSelectorHidden = true;
        this.dashService.getUsers(0).subscribe(
            data => {
                this.adminUsers = data.users;
            }
        );
    }


    clickRoleSelector() {

        this.roleSelectorHidden = false;
        // console.log(this.roleSelectorHidden);
    }

    roleConfirm() {
        this.addedAdmin.role = this.roleRadiosValue;
        this.roleSelectorHidden = true;
    }
    addUserClick() {
        this.addAdminHidden = false;
        this.adminProfileHidden = true;
    }

    submitAdminClicked() {
        this.addAdminHidden = true;
        this.adminProfileHidden = true;
    }

    cancelAdminClicked() {
        this.addAdminHidden = true;
        this.adminProfileHidden = true;
    }

    adminClick(selectedAdmin) {
        this.selectedAdmin = selectedAdmin;
        this.adminProfileHidden = false;
        this.addAdminHidden = true;
    }

    resetPass() {
        this.selectedAdmin.password = Math.random().toString(36).slice(2, 8);
    }
}


export class AddedAdmin {

    firstName: string;
    lastName: string;
    username: string;
    authType: string;
    role: number;
    password: string;
    status: number;

    constructor() {
    }
}


export class SelectedAdmin {

    _id: string;
    firstName: string;
    lastName: string;
    username: string;
    authType: string;
    password: string;
    status: number;

    constructor() {
    }
}
