import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoggerService } from '@/core/logger/logger.service';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  constructor(private loggerSrv: LoggerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const started = Date.now();
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          const elapsed = Date.now() - started;
          this.loggerSrv.log(
            `Request for ${req.urlWithParams} took ${elapsed} ms.`
          );
        }
      })
    );
  }
}
