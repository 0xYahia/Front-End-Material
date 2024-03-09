import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  activateUser: boolean = false;
  private activateSub: Subscription;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.activateSub = this.userService.activatedEmit$.subscribe(didActivate => {
      this.activateUser = didActivate;
    });
  }
  ngOnDestroy(): void {
    this.activateSub.unsubscribe();
  }
}
