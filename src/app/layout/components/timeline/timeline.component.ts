import { Component, OnInit,Input} from '@angular/core';
import {Comment, DashboardService} from '../../dashboard.service'

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input() comments: Comment[]

  constructor(public dashboardService : DashboardService) { 
    //this.comments = comments;
  }

  ngOnInit() {
    //console.log(this.comments);
  }

  activate(_id:string){
    console.log(_id);
    this.dashboardService.updateStatus("comment", _id, 1).subscribe();
 }

 deactivate(_id:String){
   console.log(_id);
   this.dashboardService.updateStatus("comment" , _id, 0).subscribe();
 }

}
