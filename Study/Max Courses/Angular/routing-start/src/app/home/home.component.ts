import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private isVisible: boolean = true;
  private num: number = 0;
  private intervalId: number;
  constructor(private router: Router, private authService: AuthService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    // this.document.addEventListener('visibilitychange', this.handleVisibilityChange);
    // this.handleVisibilityChange();
  }

  ngOnDestroy(): void {
    // this.document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    // this.stopHeavyFunction();
  }

  loadServer(id: number): void {
    //  write your logic
    this.router.navigate(['servers', id, 'edit'], { queryParams: { allowEdit: 1 }, fragment: 'loading' });
  }

  onLogin(): void {
    this.authService.login();
  }

  onLogout(): void {
    this.authService.logout();
  }

  // private startHeavyFunction(): void {
  //   this.intervalId = setInterval(() => {
  //     console.log(this.num);
  //     this.num++;
  //   }, 1000);
  // }

  // private stopHeavyFunction(): void {
  //   clearInterval(this.intervalId);
  // }

  // private handleVisibilityChange = () => {
  //   this.isVisible = !this.document.hidden;
  //   if (this.isVisible) {
  //     this.startHeavyFunction();
  //   } else {
  //     this.stopHeavyFunction();
  //   }
  // };

}
