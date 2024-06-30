import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Observable, Subject, catchError, map, tap, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  error: Subject<string> = new Subject<string>;

  onCreateOrSavePost(postData: Post): void {
    this.http.post<{ name: string }>('https://ng-complete-guide-31259-default-rtdb.firebaseio.com/posts.json',
      postData,
      {
        observe: 'response'
      }
    ).subscribe(
      responseData => {
        console.log(responseData);
      },
      error =>
        this.error.next(error.message)
    )
  }
  fetchPosts(): Observable<any> {
    let searchParam = new HttpParams()
    searchParam = new HttpParams().append('print', 'pretty')
    searchParam = new HttpParams().append('custom', 'key')
    return this.http.get<{ [key: string]: Post }>('https://ng-complete-guide-31259-default-rtdb.firebaseio.com/posts.json'
      , {
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
        params: searchParam
      }
    ).pipe(
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
    return this.http.delete('https://ng-complete-guide-31259-default-rtdb.firebaseio.com/posts.json',
      {
        observe: 'events'
      }
    ).pipe(
      tap(event => {
        if (event.type === HttpEventType.Sent) {
          console.log(`request sent but not get response status type is: ${event.type}`);
        } else if (event.type === HttpEventType.Response) {
          console.log(event.body);
        }
        console.log(event);
      })
    )
  }
}
