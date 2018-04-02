import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../dashboard.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../models/User';

@Component({
    selector: 'app-users',
    templateUrl: './adminsManager.component.html',
    styleUrls: ['./adminsManager.component.scss'],
    providers: [DashboardService]
})
export class AdminsManagerComponent implements OnInit {

    public adminUsers: User[];
    public selectedAdmin: User;
    public addedAdmin: User;
    public addAdminHidden: boolean;
    public adminProfileHidden: boolean;
    public roleSelectorHidden: boolean;
    public roleRadiosValue = 90; // default role

    firstNameSearchText: string;
    lastNameSearchText: string;
    usernameSearchText: string;
    authTypeSearchText: string;
    statusSearchNumber: number;


    constructor(public dashService: DashboardService, private modalService: NgbModal) {
        this.selectedAdmin = new User();
        this.addedAdmin = new User();
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

    open(content) {
        this.modalService.open(content).result.then((result) => {
            // this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    deleteAdminUser(SelectedAdmin: User) {
        console.log(SelectedAdmin);
        this.dashService.deleteAdminUser(SelectedAdmin).subscribe(data => {
            if (data.success) {

            }
        });
    }

    // ===========Add admin user================
    // open addUser modal
    addUserClick() {
        this.addedAdmin = new User();
        this.addAdminHidden = false;
        this.adminProfileHidden = true;
    }

    clickRoleSelector() {
        this.roleSelectorHidden = false;
        // console.log(this.roleSelectorHidden);
    }

    roleConfirm() {
        this.addedAdmin.role = this.roleRadiosValue;
        this.roleSelectorHidden = true;
    }


    // submit to add a admin user
    submitAdminClicked() {
        console.log(this.addedAdmin);
        this.dashService.addAdminUser(this.addedAdmin).subscribe(data => {
            if (data.success) {

            }
        });
        this.adminUsers.push(this.addedAdmin);
        this.addAdminHidden = true;
        this.adminProfileHidden = true;
    }

    // close addUser modal
    cancelAdminClicked() {
        this.addAdminHidden = true;
        this.adminProfileHidden = true;
    }


    // ===========update admin user================
    // open a admin user profile modal
    adminClick(selectedAdmin) {
        this.selectedAdmin = selectedAdmin;
        this.adminProfileHidden = false;
        this.addAdminHidden = true;
    }


    // open a admin user profile modal
    updateAdminClick() {
        this.adminProfileHidden = true;
        this.addAdminHidden = true;
        this.dashService.updateAdminUser(this.selectedAdmin).subscribe(data => {
            if (data.success) {

            }
        });
    }

    resetPass() {
        this.selectedAdmin.password = Math.random().toString(36).slice(2, 8);
    }
}



