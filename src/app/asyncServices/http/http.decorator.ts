import { HttpRequestMethod } from '@/common/enums';
import { methodDecoratorFactory, paramDecoratorFactory } from './utils';
import { HttpService } from './http.service';

/**
 * 设置 REST 资源的 base url
 */
export function BaseUrl(url: string): ClassDecorator {
  return function<TFunction extends Function>(Target: TFunction): TFunction {
    Target.prototype.getBaseUrl = () => url;
    return Target;
  };
}

/**
 * 为类的所有实例方法设置默认请求头
 */
export function DefaultHeaders(headers: any): ClassDecorator {
  return function(target) {
    target.prototype.getDefaultHeaders = () => headers;
    return target;
  };
}

/**
 * 方法 decorator
 */
export const GET = methodDecoratorFactory(HttpRequestMethod.GET);

export const POST = methodDecoratorFactory(HttpRequestMethod.POST);

export const PUT = methodDecoratorFactory(HttpRequestMethod.PUT);

export const DELETE = methodDecoratorFactory(HttpRequestMethod.DELETE);

export const HEAD = methodDecoratorFactory(HttpRequestMethod.HEAD);

export function Adapter(adapterFn: Function) {
  return function(
    target: HttpService,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor['adapter'] = adapterFn || null;
    return descriptor;
  };
}

/**
 * 对 REST 方法设置自定义 headers
 */
export function Headers(header: { [key: string]: any }) {
  return function(target, propertyKey, descriptor) {};
}

export const Path = paramDecoratorFactory('Path');

export const Query = paramDecoratorFactory('Query');

// REST 请求方法的 Body， 键值对， 每个方法只有一个 body
export const Body = paramDecoratorFactory('Body')('Body');

// 自定义 REST 方法的请求头
export const Header = paramDecoratorFactory('Header');
