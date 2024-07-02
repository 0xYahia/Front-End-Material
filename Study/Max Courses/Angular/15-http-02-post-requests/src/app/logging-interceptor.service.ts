import { HttpEvent, HttpEventType, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export const LoggingInterceptorService: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  console.log('Outgoing request');
  console.log(req.url);
  console.log(req.headers);

  return next(req).pipe(tap(event => {
    if (event.type === HttpEventType.Response) {
      console.log('Incoming response');
      console.log(event.body);
    }
  }))
}
