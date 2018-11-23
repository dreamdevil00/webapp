import { InjectionToken } from '@angular/core';
import { StorageService } from './storage.service';
import { CookieService } from './cookie.service';

export type StorageType = StorageService | CookieService;
export class AbstractStorage {
  get(key: any): any {}
  set(key: string, val: any, expires?: Date): void {}
  remove(key: any): void {}
}

export const STORAGE_TOKEN = new InjectionToken<StorageType>('客户端存储');
