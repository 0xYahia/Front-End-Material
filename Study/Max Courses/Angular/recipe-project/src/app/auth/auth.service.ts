import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from "./user.model";
import { Router } from "@angular/router";


export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  tokenExpirationTimer: any;
  constructor(private http: HttpClient, private router: Router) { }

  signup(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAOiGURv7rFHhAdGOZbAHmLZm5BSdubhK4',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(catchError(this.handleError), tap(resData => {
      this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    }));
  }

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAOiGURv7rFHhAdGOZbAHmLZm5BSdubhK4',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(catchError(this.handleError), tap(resData => {
      this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    }));
  }

  autoLogin(): void {
    const userData: { email: string, id: string, _token: string, _tokenExpirationDate: string } = JSON.parse(localStorage.getItem('userData'));

    const loadedUser: User = new User(userData?.email, userData?.id, userData?._token, new Date(userData?._tokenExpirationDate));

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration: number = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  private handleAuthentication(email: string, userId: string, token: string, expirationIn: number) {
    const expirationDate: Date = new Date(new Date().getTime() + +expirationIn * 1000);
    const user: User = new User(
      email,
      userId,
      token,
      expirationDate
    );
    this.user.next(user);
    this.autoLogout(expirationIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage: string = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This mail exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Not there account with this mail.';
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }

  logout(): void {
    this.user.next(null);
    this.router.navigate(['/auth']);

    if (this.tokenExpirationTimer) {
      clearInterval(this.tokenExpirationTimer);
      localStorage.removeItem('userData');
    }

    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number): void {
    console.log(expirationDuration);
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }
}
