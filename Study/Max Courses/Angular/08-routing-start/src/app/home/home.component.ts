import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private isVisible: boolean = true;
  private num: number = 0;
  private intervalId: number;
  constructor(private router: Router, private authService: AuthService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {

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

}
