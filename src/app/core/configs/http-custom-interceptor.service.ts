import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpCustomInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const requestToSend = req.clone({
      setHeaders: { 'Accept': 'Application/json' }
    });
    return next.handle(requestToSend);
  }
}
