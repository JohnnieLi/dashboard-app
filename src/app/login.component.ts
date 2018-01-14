import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public username: String;
    public password: String;

    constructor(private router: Router, private loginService: LoginService) {
    }

    ngOnInit(): void {
    }


    login() {
        this.loginService.login(this.username, this.password)
            .subscribe(response => {
                if (response.success) {
                    localStorage.setItem('token', response.token);
                    const user = JSON.stringify(response.user);
                    const firstName: String = JSON.parse(user).firstName;
                    const username = JSON.parse(user).username;
                    const lastName = JSON.parse(user).lastName;
                    const role = JSON.parse(user).role;
                    const _id = JSON.parse(user)._id;
                    const authType = JSON.parse(user).authType;
                    const imageUrl = JSON.parse(user).imageUrl;
                    const hasProfilePic = JSON.parse(user).hasProfileImage;
                    localStorage.setItem('currentUser', JSON.stringify({
                        username: username,
                        firstName: firstName,
                        lastName: lastName,
                        _id: _id,
                        role: role,
                        hasProfilePic: hasProfilePic,
                        imageUrl: imageUrl,
                        authType: authType
                    }));
                    this.loginService.setLogInTitle('Hi ' + firstName);
                    this.loginService.setUserRoleSubject(role);
                    this.router.navigate(['/dashboard']);
                }
            });
    }

}