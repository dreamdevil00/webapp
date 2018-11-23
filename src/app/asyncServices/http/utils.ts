import { HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { HttpRequestMethod } from '@/common/enums';
import { HttpService } from './http.service';

export function methodDecoratorFactory(
  method: HttpRequestMethod
): (url) => MethodDecorator {
  return function(url: string): MethodDecorator {
    return function(
      target: HttpService,
      propertyKey: string,
      descriptor: PropertyDescriptor
    ) {
      const pPath = target[`${propertyKey}_Path_parameters`];
      const pQuery = target[`${propertyKey}_Query_parameters`];
      const pBody = target[`${propertyKey}_Body_parameters`];
      const pHeader = target[`${propertyKey}_Header_parameters`];

      descriptor.value = function(...args: any[]) {
        const body: string = createBody(pBody, descriptor, args);
        const resUrl: string = createPath(url, pPath, args);
        const headers: HttpHeaders = createHeaders(
          pHeader,
          descriptor,
          this.getDefaultHeaders(),
          args
        );

        const requestUrl = this.getBaseUrl() + resUrl;
        const req = new HttpRequest(method, requestUrl, {
          headers,
          httpParams: {}
        });

        this.requestInterceptor(req);

        const observable: Observable<HttpResponse> = this.httpClient.request(
          req
        );

        observable = this.responseInterceptor(observable, descriptor.adapter);

        return observable;
      };

      return descriptor;
    };
  };
}
export function paramDecoratorFactory(
  paramName: string
): (key: string) => ParameterDecorator {
  return function(key: string): ParameterDecorator {
    return function(target, propertyKey, descriptor) {};
  };
}
export function createQuery() {}

export function createHeaders(
  paramHeader: any,
  descriptor: any,
  defaultHeaders: any,
  args: Array<any>
): HttpHeaders {
  const headers = new HttpHeaders(defaultHeaders);

  // 设置 指定方法 请求头
  for (const k in descriptor.headers) {
    if (descriptor.headers.hasOwnProperty(k)) {
      if (headers.has(k)) {
        headers.delete(k);
      }
      headers.append(k, descriptor.headers[k]);
    }
  }

  // 设置指定参数请求头
  if (paramHeader) {
    for (const k in paramHeader) {
      if (paramHeader.hasOwnProperty(k)) {
        if (headers.has(k)) {
          headers.delete(k);
        }
        headers.append(paramHeader[k].key, args[paramHeader[k].parameterIndex]);
      }
    }
  }

  return headers;
}
