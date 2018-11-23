import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpAdapter } from './http.adaptor';
import { HttpResponseHandler } from './response-handler.service';

export enum MediaType {
  JSON,
  FORM_DATA
}

@Injectable()
export class HttpService {
  constructor(
    protected httpClient: HttpClient,
    protected responseHandler: HttpResponseHandler
  ) {}

  // 请求 拦截器
  protected requestInterceptor(req: HttpRequest<any>) {}
  // 响应拦截器
  protected responseInterceptor(
    observableRes: Observable<any>,
    adapterFn?: Function
  ): Observable<any> {
    return observableRes.pipe(
      map(res => HttpAdapter.baseAdapter(res, adapterFn)),
      catchError(err => this.responseHandler.onError(err))
    );
  }
}
