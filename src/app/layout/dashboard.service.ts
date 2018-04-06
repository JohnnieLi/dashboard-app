import {Inject, Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// import { Http , Headers,Response,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {APP_CONFIG, IAppConfig} from '../app.config'; // global config
import 'rxjs/add/operator/map';
import {environment} from './../../environments/environment';
import {User} from '../models/User';
import {Message} from '../models/Message';

@Injectable()
export class DashboardService {


    constructor(@Inject(APP_CONFIG) private config: IAppConfig,
                private router: ActivatedRoute, private http: HttpClient) {
        console.log(environment);
    }


    public getUsers(type: number): Observable<any> {
        switch (type) {
            case 0: // 0 = normal user
                if (environment.localData) {
                    return this.http.get(this.config.localPath + '/normalUsers.json');
                } else {
                    return this.http.get(this.config.apiEndpoint + '/dashboard/getUsers?type=0');
                }

            case 1: // 1 = businessman user
                if (this.config.localData) {
                    return this.http.get(this.config.localPath + '/businessUsers.json');
                } else {
                    return this.http.get(this.config.apiEndpoint + '/dashboard/getUsers?type=1');
                }
            default:
                break;
        }
    }


    public getPostsByUserID(user_id: String): Observable<any> {
        if (environment.localData) {
            return this.http.get(this.config.localPath + '/posts.json');
        } else {
            return this.http.get(this.config.apiEndpoint + '/dashboard/getPosts?user_id=' + user_id);
        }
    }


    public updateStatus(type: String, _id: String, status: number): Observable<any> {
        return this.http.post(this.config.apiEndpoint + '/dashboard/updateStatus', {
            type: type,
            _id: _id,
            status: status
        });
    }


    public getCommentsByUserID(user_id: String): Observable<any> {
        if (environment.localData) {
            return this.http.get(this.config.localPath + '/comments.json');
        } else {
            return this.http.get(this.config.apiEndpoint + '/dashboard/getComments?user_id=' + user_id);
        }
    }

    public getProfileByUserID(user_id: String): Observable<any> {
        if (environment.localData) {
            return this.http.get(this.config.localPath + '/profile.json');
        } else {
            return this.http.get(this.config.apiEndpoint + '/dashboard/getProfile?user_id=' + user_id);
        }
    }

    public addAdminUser(adminUser: User): Observable<any> {
        if (environment.localData) {
            return this.http.get(this.config.localPath + '/addAdminUser.json');
        } else {
            return this.http.post(this.config.apiEndpoint + '/dashboard/addAdminUser', {adminUser: adminUser});
        }
    }

    public updateAdminUser(adminUser: User): Observable<any> {
        if (environment.localData) {
            return this.http.get(this.config.localPath + '/updateAdminUser.json');
        } else {
            return this.http.post(this.config.apiEndpoint + '/dashboard/updateAdminUser', {adminUser: adminUser});
        }
    }

    public deleteAdminUser(adminUser: User): Observable<any> {
        if (environment.localData) {
            return this.http.get(this.config.localPath + '/deleteAdminUser.json');
        } else {
            return this.http.post(this.config.apiEndpoint + '/dashboard/deleteAdminUser', {adminUser: adminUser});
        }
    }


    public sendMessage(message: Message): Observable<any> {
        if (environment.localData) {
            console.log('send Message service', message);
            return this.http.get(this.config.localPath + '/adminLogin.json');
        } else {
            return this.http.post(this.config.apiEndpoint + '/message/sendMessage', {message: message});
        }
    }



    public getMessage(user_id: string): Observable<any> {
        if (environment.localData) {
            return this.http.get(this.config.localPath + '/adminLogin.json');
        } else {
            return this.http.post(this.config.apiEndpoint + '/message/get', {use_id: user_id});
        }
    }


    public setMessageStatus(_id: string, status: number): Observable<any> {
        if (environment.localData) {
            return this.http.get(this.config.localPath + '/adminLogin.json');
        } else {
            return this.http.post(this.config.apiEndpoint + '/message/setStatus', {_id: _id, status: status});
        }
    }


    // public getBusinessManByIdWithUserId(_id:string, user_id:string):Observable<any>{
    //     return this.http.get(this.config.apiEndpoint+'/editMyDetail?_id='+_id+'&user_id='+user_id);
    // }

    // public getBusinessManByUserId(id:string):Observable<any>{
    //     return this.http.get(this.config.apiEndpoint+'/myDetail?user_Id='+id);
    // }


    //  public updateBusinessManDetail(businessManDetail: BusinessManDetail):Observable<any>{
    //      console.log(businessManDetail);
    //      return this.http.post(this.config.apiEndpoint+'/updateBusinessManDetail',businessManDetail,
    //      {headers: this.jwt()
    //      });
    //  }


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



export class Profile {
    public _id: string;
    public firstName: string;
    public lastName: string;
    public username: string;
    public imageUrl: string;
    public status: number;
    public role: number;
    public category: string;
    public phone: string;
    public grade: number;
    public path: string;
}


export class Post {
    public _id: string;
    public type: string;
    public description: string;
    public status: number;
}

export class Comment {
    public _id: string;
    public message: string;
    public date: Date;
    public status: number;
}


export class SubComment {
    public _id: string;
    public date: Date;
    public businessManId: number;
    public businessMan_Id: string;
    public fromUser_Id: string;
    public fromUsername: string;
    public fromUserIamgePath: string;
    public toUser_Id: string;
    public toUsername: string;
    public topic_Id: string;
    public isTopic: boolean;
    public message: string;
}