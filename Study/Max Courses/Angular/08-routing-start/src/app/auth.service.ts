export class AuthService {
  isLoggedIn: boolean = false;

  authenticated(): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 800);
    });
  }

  login(): void {
    this.isLoggedIn = true;
  }


  logout(): void {
    this.isLoggedIn = false;
  }
}
