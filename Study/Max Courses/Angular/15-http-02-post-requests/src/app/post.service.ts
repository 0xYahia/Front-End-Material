import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Observable, map, retry } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  onCreateOrSavePost(postData: Post): Observable<any> {
    return this.http.post<{ name: string }>('https://ng-complete-guide-31259-default-rtdb.firebaseio.com/posts.json', postData)
  }
  fetchPosts(): Observable<any> {
    return this.http.get<{ [key: string]: Post }>('https://ng-complete-guide-31259-default-rtdb.firebaseio.com/posts.json').pipe(
      map(responseData => {
        const postArr: Post[] = []
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postArr.push({ ...responseData[key], id: key })
          }
        }
        return postArr
      })
    )
  }

  deleteAllPosts(): Observable<any> {
    return this.http.delete('https://ng-complete-guide-31259-default-rtdb.firebaseio.com/posts.json')
  }
}
