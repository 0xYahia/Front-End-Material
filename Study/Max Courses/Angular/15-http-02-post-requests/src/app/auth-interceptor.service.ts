import { HttpEvent, HttpEventType, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

//! Old way of creating an interceptor
// export class AuthInterceptorService implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     console.log('Request is on its way');
//     return next.handle(req)
//   }
// }

//! New way of creating an interceptor
export const AuthInterceptorService: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): any => {
  console.log('Request is on its way');
  console.log(req.url);
  const modifiedRequest = req.clone({
    headers: req.headers.append('Auth', 'xyz')
  });
  return next(modifiedRequest).pipe(tap(event => {
    console.log(event);
    if (event.type === HttpEventType.Response) {
      console.log('Response arrived, body data: ', event.body);
    }
  }))
}

