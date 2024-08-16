import { Component } from '@angular/core';

@Component({
  selector: 'app-Users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  standalone: true
})
export class UsersComponent {
  user?: { name: string };
  isLoggedIn: boolean = false;
  constructor() { }
}
