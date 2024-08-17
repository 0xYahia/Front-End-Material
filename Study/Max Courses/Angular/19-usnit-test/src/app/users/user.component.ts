import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { CommonModule } from '@angular/common';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-Users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class UsersComponent implements OnInit {
  user!: { name: string };
  data!: string | undefined;
  isLoggedIn: boolean = false;
  constructor(private userService: UserService, private dataService: DataService) { }
  ngOnInit(): void {
    this.user = this.userService.user;
    this.dataService.getDetails().then((data: string) => this.data = data);
  }
}
