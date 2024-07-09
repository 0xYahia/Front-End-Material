import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


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
    );
  }
}
