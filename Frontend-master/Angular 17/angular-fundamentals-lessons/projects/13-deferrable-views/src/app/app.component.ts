import { Component } from '@angular/core';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostsComponent],
  template: `
    <section class="container">
      <h1>Deferrable Views Example</h1>
      <button #loadPosts>Load Posts</button>
      @defer (on interaction(loadPosts) ;on timer(5000)) {
        <app-posts />
      } @loading  {
        <img src="assets/loading.gif">
        <p>Loading..</p>
      } @placeholder {
        <p>This is Placeholder</p>
      } @error {
        <p>Failed to load the calendar</p>
      }
    </section>
  `,
})
export class AppComponent { }
