import { HeaderInterceptor } from '@/core/net/head.interceptor';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { I18NService } from '@/core/i18n/i18n.service';
import { LoggerService, LogInterceptor } from '@/core/logger';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [I18NService, LoggerService, LogInterceptor, HeaderInterceptor]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error(`CoreModule 只能在根模块中导入`);
    }
  }
}
