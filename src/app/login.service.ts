import {Injectable, Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {APP_CONFIG, IAppConfig} from './app.config'; // global config
import 'rxjs/add/operator/map';
import {environment} from './../environments/environment';
import {promise} from 'selenium-webdriver';

@Injectable()
export class LoginService {

    private logInTitle: String = 'login';
    private logoutTitle: String;
    private loginSubject: Subject<String> = new Subject<String>();
    private userRoleSubject: Subject<String> = new Subject<String>();

    constructor(@Inject(APP_CONFIG) private config: IAppConfig,
                private router: ActivatedRoute, private http: HttpClient) {
        console.log(environment);
    }

    public login(username: String, password: String): Observable<any> {
        if (environment.localData) {
            if (username === 'admin@atbi.ca') {
                return this.http.get(this.config.localPath + '/superAdminLogin.json');
            } else if (username === 'admin1@atbi.ca') {
                return this.http.get(this.config.localPath + '/adminLogin.json');
            } else {
                return this.http.get(this.config.localPath + '/loginFailed.json');
            }
        } else {
            return this.http.post(this.config.apiEndpoint + '/auth/dashboardLogIn?',
                {
                    username: username,
                    password: password
                });
        }
    }


    public loginAs(_id: string): Observable<any>{
        return this.http.post(this.config.apiEndpoint + '/auth/adminLog',
            { _id: _id },
            {headers: this.jwt()}
            );
    }

    // change Observable value
    setUserRoleSubject(role: String): void {
        // console.log("set Logintitle with:" + title);
        this.userRoleSubject.next(role);
    }

    // be called by observers,such as appComponent
    getUserRoleSubject(): Observable<String> {
        return this.userRoleSubject.asObservable();
    }

    // change Observable value
    setLogInTitle(title: String): void {
        this.logInTitle = title;
        this.loginSubject.next(this.logInTitle);
    }

    // be called by observers,such as appComponent
    getLogInTitle(): Observable<String> {
        return this.loginSubject.asObservable();
    }

    logout() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
    }


    public validateToken(): Observable<any> {
        if (environment.localData) {
            return this.http.get(this.config.localPath + '/validateToken.json',
                {
                    headers: this.jwt()
                });
        } else {
            return this.http.get(this.config.apiEndpoint + '/auth/validateToken',
                {
                    headers: this.jwt()
                });
        }
    }

    public isSuperAdmin(): Observable<any>{
        return this.validateToken();
    }

    public isLoggedIn(): Observable<any> {
        return this.validateToken();
    }

    // create token header
    private jwt() {
        // create authorization header with jwt token
        const token = localStorage.getItem('token');
        if (token) {
            // let headers = new Headers({ 'Authorization': token });
            // return new RequestOptions({ headers: headers });
            return new HttpHeaders().set('Authorization', token);

        }
    }
}