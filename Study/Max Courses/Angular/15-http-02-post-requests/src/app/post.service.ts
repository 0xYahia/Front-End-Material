import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Observable, Subject, catchError, map, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  error: Subject<string> = new Subject<string>;

  onCreateOrSavePost(postData: Post): void {
    this.http.post<{ name: string }>('https://ng-complete-guide-31259-default-rtdb.firebaseio.com/posts.json', postData).subscribe(
      responseData => {
        console.log(responseData);
      },
      error =>
        this.error.next(error.message)
    )
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
      }),
      catchError((responseError) => {
        return throwError(responseError)
      })
    )
  }

  deleteAllPosts(): Observable<any> {
    return this.http.delete('https://ng-complete-guide-31259-default-rtdb.firebaseio.com/posts.json')
  }
}
