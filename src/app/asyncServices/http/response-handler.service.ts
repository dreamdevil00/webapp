import { Injectable, Injector } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { LoggerService } from '@/core/logger/logger.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';

@Injectable()
export class HttpResponseHandler {
  constructor(private injector: Injector) {}

  get msgSrv(): NzMessageService {
    return this.injector.get(NzMessageService);
  }

  get loggerSrv(): LoggerService {
    return this.injector.get(LoggerService);
  }

  public onError(errRes: HttpErrorResponse): Observable<never> {
    switch (errRes.status) {
      case 400:
        this.handleBadRequest(errRes);
        break;
      case 401:
        break;
      case 403:
        break;
      case 404:
        break;
      case 500:
        break;
      default: {
        this.loggerSrv.warn(`未知错误`, errRes);
        this.msgSrv.error(errRes.message);
      }
    }
    return throwError(errRes);
  }

  private goto(url: string) {
    setTimeout(() => {
      this.injector.get(Router).navigateByUrl(url);
    }, 0);
  }

  private handleBadRequest(errRes: HttpErrorResponse) {
    this.goto('/400');
  }
}
