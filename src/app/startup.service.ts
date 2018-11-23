import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { retry } from 'rxjs/operators';

@Injectable()
export class StartupService {
  private config: Object = {};
  private configUrl = '/assets/config.json';
  constructor(private http: HttpClient) {}

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get(this.configUrl)
        .pipe(retry(3))
        .subscribe(
          success => {
            console.log(success);
            this.config = success;
            resolve(success);
          },
          (error: HttpErrorResponse) => {
            if (error.error instanceof ErrorEvent) {
              console.error(`出错: ${error.error.message}`);
            } else {
              // 后端返回 失败 响应码
              console.error(
                `后端返回 响应码: ${error.status},
                 响应体: ${error.error}
                `
              );
            }
            reject(new Error('发生了错误， 请稍后重试'));
          }
        );
    });
  }

  get(key: string) {
    return this.config[key];
  }
}
