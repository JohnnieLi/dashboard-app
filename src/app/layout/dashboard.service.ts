import {Injectable, Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// import { Http , Headers,Response,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {APP_CONFIG, IAppConfig} from '../app.config'; // global config
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService {


    constructor(@Inject(APP_CONFIG) private config: IAppConfig,
                private router: ActivatedRoute, private http: HttpClient) {

    }


    public getUsers(type: number): Observable<any> {
        switch (type) {
            case 0: // 0 = normal user
                if (this.config.localData) {
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
        if (this.config.localData) {
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
        if (this.config.localData) {
            return this.http.get(this.config.localPath + '/comments.json');
        } else {
            return this.http.get(this.config.apiEndpoint + '/dashboard/getComments?user_id=' + user_id);
        }
    }

    public getProfileByUserID(user_id: String): Observable<any> {
        if (this.config.localData) {
            return this.http.get(this.config.localPath + '/profile.json');
        } else {
            return this.http.get(this.config.apiEndpoint + '/dashboard/getProfile?user_id=' + user_id);
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

export interface User {
    _id: String;
    firstName: String;
    lastName: String;
    username: String;
    status: number;
}


export class Profile {
    public _id: String;
    public firstName: String;
    public lastName: String;
    public username: String;
    public imageUrl: String;
    public status: number;
    public role: number;
    public category: String;
    public phone: String;
    public grade: number;
    public path: string;

}


export class Post {
    public _id: String;
    public type: String;
    public description: String;
    public status: number;
}

export class Comment {
    public _id: String;
    public message: String;
    public date: Date;
    public status: number;
}


export class subComment {
    constructor(public _id: String,
                public date: Date,
                public businessManId: number,
                public businessMan_Id: String,
                public fromUser_Id: String,
                public fromUsername: String,
                public fromUserIamgePath: String,
                public toUser_Id: String,
                public toUsername: String,
                public topic_Id: String,
                public isTopic: Boolean,
                public message: String,) {
    }
}