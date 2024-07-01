import { ChangeDetectorRef, Component, ErrorHandler, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Post } from './post.model';
import { CommonModule } from '@angular/common';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching: boolean = false;

  error: string | null = null;
  errorSub: Subscription = new Subscription;
  constructor(private http: HttpClient, private postService: PostService) { }
  ngOnInit() {
    this.onFetchPosts()
    console.log(this.loadedPosts);
    this.errorSub = this.postService.error.subscribe(errorMessage => {
      this.error = errorMessage
    })
  }

  onCreatePost(postData: { title: string; content: string }) {
    console.log(postData);
    this.postService.onCreateOrSavePost(postData)
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts!
    },
      error => {
        this.isFetching = false;
        this.error = error.error.error
        console.log(error);
      }
    )
  }

  onHandlerError(): void {
    this.error = null;
  }

  onClearPosts() {
    // Send Http request
    this.postService.deleteAllPosts().subscribe(() => {
      this.loadedPosts = []
    })
  }

  // private fetchPosts(): void {
  //   this.isFetching = true;
  //   this.http.get<{ [key: string]: Post }>('https://ng-complete-guide-31259-default-rtdb.firebaseio.com/posts.json').pipe(
  //     map(responseData => {
  //       const postArr: Post[] = [];
  //       for (const key in responseData) {
  //         if (responseData.hasOwnProperty(key)) {
  //           postArr.push({ ...responseData[key], id: key })
  //         }
  //       }
  //       return postArr;
  //     }),
  //     catchError((error: ErrorHandler) => {
  //       console.error('Error fetching posts:', error)
  //       return of([]);
  //     })

  //   ).subscribe(
  //     // {
  //     //   next: (posts) => {
  //     //     this.loadedPosts = posts
  //     //     console.log(this.loadedPosts);
  //     //   },
  //     //   error: (error) => {
  //     //     console.error('Error fetching posts:', error)
  //     //     this.loadedPosts = []
  //     //   }
  //     // }
  //     (posts) => {
  //       this.isFetching = false;
  //       this.loadedPosts = posts
  //     }
  //   )
  // }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe()
  }
}
