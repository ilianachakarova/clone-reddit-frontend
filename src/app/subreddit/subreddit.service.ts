import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { SubredditModel } from './subreddit-response';
import { Observable } from 'rxjs';

let headersReq = new HttpHeaders({
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET',
  'Access-Control-Allow-Origin': '*'
});

@Injectable({
  providedIn: 'root'
})
export class SubredditService {
  constructor(private http: HttpClient) { }

  getAllSubreddits(): Observable<Array<SubredditModel>> {
    return this.http.get<Array<SubredditModel>>('https://springboot-blog-api.herokuapp.com/api/subreddit', {headers: headersReq});
  }

  createSubreddit(subredditModel: SubredditModel): Observable<SubredditModel> {
    return this.http.post<SubredditModel>('https://springboot-blog-api.herokuapp.com/api/subreddit',
      subredditModel);
  }

  getSubredditById(id:number):Observable<SubredditModel>{
    return this.http.get<SubredditModel>('https://springboot-blog-api.herokuapp.com/api/subreddit/' + id, {headers: headersReq});
  }
}
