import { Component } from '@angular/core';
import { UsersComponent } from './users/user.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'TapTag';
}
