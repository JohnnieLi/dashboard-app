import {Component, Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {LoginService} from '../login.service';
import {ActivatedRoute, Router, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AlwaysLoggedInGuard implements CanActivate {

    constructor(private loginService: LoginService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
        // console.log("AlwaysLoggedIn");
        // return true;
        const token = localStorage.getItem('token');
        // console.log(token);
        if (!token) {
            window.alert('You need login first');
            this.router.navigate(['/']);
            return false;
        }
        return this.loginService.isLoggedIn().map((data, error) => {
            if (error) {
                return false;
            }
            if (data.valid) {
                return true;
            } else {
                window.alert('You don\'t have permission to access.');
                this.router.navigate(['/']);
                return false;
            }
        });
    }
}