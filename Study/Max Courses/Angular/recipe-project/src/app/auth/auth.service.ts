import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";


interface AuthResponseData {
  idToken: string;
  refreshToken: string;
  expiresIn: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  signup(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyAOiGURv7rFHhAdGOZbAHmLZm5BSdubhK4',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(catchError(errorRes => {
      let errorMessage: string = 'An unknown error occurred!';
      if (!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }
      switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This mail exists already';
      }
      return throwError(errorMessage);
    }));
  }
}
