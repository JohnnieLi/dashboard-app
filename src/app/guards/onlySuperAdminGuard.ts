import {Component, Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {LoginService} from '../login.service';
import {ActivatedRoute, Router, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class OnlySuperAdminGuard implements CanActivate {

    constructor(private loginService: LoginService,
                private router: Router) {
    }

    canActivate(): boolean | Observable<boolean> {
        // console.log("AlwaysLoggedIn");
        // return true;
        const token = localStorage.getItem('token');
        // console.log(token);
        if (!token) {
            window.alert('You need login first');
            this.router.navigate(['/']);
            return false;
        }
        return this.loginService.isSuperAdmin().map((data, error) => {
            if (error) {
                return false;
            }
            console.log(data);
            if (data.role == 99) {
                return true;
            } else {
                window.alert('You don\'t have permission to access.');
                // this.router.navigate(['/dashboard']);
                return false;
            }
        });
    }
}