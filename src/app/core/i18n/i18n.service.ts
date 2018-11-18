import { Injectable } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class I18NService {
  locale$: BehaviorSubject<null | string> = new BehaviorSubject(null);

  set locale(val: string) {
    this.localeInitializer(val).then(
      () => {
        this.locale$.next(val);
      },
      err => {
        console.error(err);
      }
    );
  }
  constructor() {}

  // reference: https://blog.angularindepth.com/dynamic-import-of-locales-in-angular-b994d3c07197
  localeInitializer(locale: string): Promise<any> {
    return import(/* webpackInclude: /(zh-Hans|en)\.js$/ */
    `@angular/common/locales/${locale}.js`).then(module =>
      registerLocaleData(module.default)
    );
  }
}
