import { Component, OnInit,Input, OnChanges, SimpleChanges} from '@angular/core';
import {Post, DashboardService} from '../../dashboard.service'

@Component({
  selector: 'app-postList',
  templateUrl: './postList.component.html',
  styleUrls: ['./postList.component.scss'],
  providers:[DashboardService]

})
export class PostListComponent implements OnInit {

  @Input() posts: Post[]
  

  constructor(public dashboardService: DashboardService) { 
  
  }

  ngOnInit() {
    //console.log(this.posts);
  }

  activate(type:String, _id:string){
     //console.log(type,_id);
     this.dashboardService.updateStatus(type, _id, 1).subscribe(
       data=>{
         if(data.success){
           for(var i = 0; i < this.posts.length; i++){
             if(this.posts[i]._id == _id){
               this.posts[i].status = 1;
             }
           }
         }
       }
     );
  }

  deactivate(type:String,_id:String){
    //console.log(type,_id);
    this.dashboardService.updateStatus(type , _id, 0).subscribe(
      data=>{
        if(data.success){
          for(var i = 0; i < this.posts.length; i++){
            if(this.posts[i]._id == _id){
              this.posts[i].status = 0;
            }
          }
        }
      }
    );
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   // only run when property "data" changed
  //   if (changes['posts']) {
  //       this.posts = this.groupByCategory(this.data);
  //   }
  //}

}
