import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient, private afs: AngularFirestore) { }
  ngOnInit() {
    this.fetchPosts()
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData);
    this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-31259-default-rtdb.firebaseio.com/posts.json',
        postData
      ).subscribe(responseData => {
        console.log(responseData);
      });
    // const postId = this.afs.createId();
    // console.log(postId);
    // this.afs.collection('/posts').add(postData);
  }

  onFetchPosts() {
    // Send Http request
    // this.afs.collection('/posts').valueChanges().subscribe(posts => {
    //   console.log(posts);
    // });
    this.fetchPosts()
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts(): void {
    this.http.get<{ [key: string]: Post }>('https://ng-complete-guide-31259-default-rtdb.firebaseio.com/posts.json').pipe(
      map(responseData => {
        const postArr: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postArr.push({ ...responseData[key], id: key })
          }
        }
        return postArr;
      })

    ).subscribe(posts => {
      console.log(posts);
    })
  }
}
