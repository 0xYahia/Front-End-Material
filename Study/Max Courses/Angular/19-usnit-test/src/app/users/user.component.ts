import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-Users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class UsersComponent implements OnInit {
  user!: { name: string };
  isLoggedIn: boolean = false;
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.user = this.userService.user;
  }
}
