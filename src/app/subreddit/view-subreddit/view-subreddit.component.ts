import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { PostService } from 'src/app/shared/post.service';
import { SubredditModel } from '../subreddit-response';
import { SubredditService } from '../subreddit.service';

@Component({
  selector: 'app-view-subreddit',
  templateUrl: './view-subreddit.component.html',
  styleUrls: ['./view-subreddit.component.css']
})
export class ViewSubredditComponent implements OnInit {
  subredditId:number;
  subredditModel: SubredditModel;

  constructor(private subredditService: SubredditService, private activateRoute: ActivatedRoute, 
    private router: Router, private postService: PostService) { 
      this.subredditId = this.activateRoute.snapshot.params.id;
    }

  ngOnInit(): void {
   this.getPostById();
  }

  getPostById(){
    this.subredditService.getSubredditById(this.subredditId).subscribe(data=>{
      this.subredditModel = data;
      console.log('i am in the getPostById method ');
    },error=>{
      throwError(error);
    });
  }

 

}
