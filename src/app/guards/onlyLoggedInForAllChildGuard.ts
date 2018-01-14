import {Component, Injectable} from '@angular/core';
import {CanActivateChild} from '@angular/router';
import {LoginService} from '../login.service';

@Injectable()
export class OnlyLoggedInForAllChildGuard implements CanActivateChild {

    constructor(private loginService: LoginService) {
    }

    canActivateChild() {
        console.log('OnlyLoggedInUsers');
        if (this.loginService.isLoggedIn()) {
            window.alert('You have permission to view this page');
            return true;
        } else {
            window.alert('You don\'t have permission to view this page');
            return false;
        }
    }
}
