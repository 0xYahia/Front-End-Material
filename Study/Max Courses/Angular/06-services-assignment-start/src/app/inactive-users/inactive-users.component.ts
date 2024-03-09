import {Component, OnInit} from '@angular/core';
import {UserService} from "../users.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];

  constructor(private _userService: UserService) {
  }

  ngOnInit(): void {
    this.users = this._userService.inactiveUsers
  }

  onSetToActive(id: number) {
    this._userService.setToActive(id)
  }
}
