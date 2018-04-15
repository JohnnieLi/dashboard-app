import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


    title: String;
    isSuperAdmin: boolean;
    isAccountVisible: boolean;

    // 1.set AuthenticationService as the global service(provided in app.module
    // and don't prvided in components).
    // 2. using Observable design pattern(subscribe method) to listen this service.
    constructor(private loginService: LoginService,
                private router: Router) {
        loginService.getLogInTitle().subscribe((title: String) => {
            this.title = title;
            this.isAccountVisible = true;
        });

        loginService.getUserRoleSubject().subscribe((role: String) => {
            this.isSuperAdmin = (role == '99');
        });

        // loginService.getProfilePictureUrl().subscribe((profileUrl: any) => {
        //     this.hasProfileImg = profileUrl;
        // });
    }

    ngOnInit(): void {
        // this.selectLang('en');
        this.isAccountVisible = false;
        // this.title = 'LogIn';
        if (localStorage.getItem('currentUser')) {
            this.title = 'Hi ' + JSON.parse(localStorage.getItem('currentUser')).firstName;
            const role = JSON.parse(localStorage.getItem('currentUser')).role;
            this.isSuperAdmin = (role == '99');
            this.isAccountVisible = true;
            this.router.navigate(['/dashboard']);
            // this.loginService.setProfilePictureUrl();
        }
    }

    logoutClick() {
        this.loginService.logout();
        this.isAccountVisible = false;
        this.isSuperAdmin = false;
        this.router.navigate(['/']);
    }
}
