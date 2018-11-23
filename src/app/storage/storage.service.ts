import { Injectable } from '@angular/core';
import { AbstractStorage } from './interfaces';
import { LoggerService } from '@/core/logger';
@Injectable()
export class StorageService extends AbstractStorage {
  constructor(private loggerSrv: LoggerService) {
    super();
  }
  get(key: string): any {
    return this.parse(localStorage.getItem(key));
  }

  set(key: string, value: any, expires?: Date): void {
    localStorage.setItem(
      key,
      typeof value === 'object' ? JSON.stringify(value) : value
    );
  }

  remove(key: string) {
    if (localStorage[key]) {
      localStorage.removeItem(key);
    } else {
      this.loggerSrv.log(`正删除不存在的键: ${key}`);
    }
  }

  private parse(value: any) {
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }
}
