import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@/env/environment';
@Injectable()
export class AppConfigService {
  private config: Object = {};
  constructor(private http: HttpClient) {}

  load(): Promise<any> {
    return this.http
      .get(environment.configUrl)
      .toPromise()
      .then(
        res => {
          this.config = res;
        },
        err => {
          console.error(err);
        }
      );
  }

  get(key: string) {
    return this.config[key];
  }
}
