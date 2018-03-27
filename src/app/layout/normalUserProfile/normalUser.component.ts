import {Component, OnInit} from '@angular/core';
import {Post, Comment, Profile, DashboardService} from '../dashboard.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-normalUser',
    templateUrl: './normalUser.component.html',
    styleUrls: ['./normalUser.component.scss'],
    providers: [DashboardService],
})
export class NormalUserComponent implements OnInit {

    posts: Post[];
    comments: Comment[];
    profile: Profile;

    constructor(public route: ActivatedRoute,
                private router: Router,
                public dashboardService: DashboardService) {

    }

    ngOnInit() {

        let _id = this.route.snapshot.params.id != null ? this.route.snapshot.params.id : '';
        //console.log(this.route.snapshot.params.id);
        this.dashboardService.getCommentsByUserID(_id).subscribe(
            data => {
                this.comments = data.comments;
                //console.log(this.comments);
            }
        );
        this.dashboardService.getPostsByUserID(_id).subscribe(
            data => {

                this.posts = data.posts;

            }
        );
        this.dashboardService.getProfileByUserID(_id).subscribe(
            data => {

                this.profile = data.profile;

            }
        );
    }


}
