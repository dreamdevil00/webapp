import { NgModule, ModuleWithProviders } from '@angular/core';

import { CookieService } from './cookie.service';
import { StorageService } from './storage.service';
import { STORAGE_TOKEN } from './interfaces';
@NgModule({})
export class StorageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StorageModule,
      providers: [
        CookieService,
        StorageService,
        {
          provide: STORAGE_TOKEN,
          useClass: StorageService
        }
      ]
    };
  }
}
