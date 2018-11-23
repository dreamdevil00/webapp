import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

import { AppRoutingModule } from '@/app-routing.module';
import { AppComponent } from '@/app.component';

import { CoreModule } from '@/core';
import { SharedModule } from '@/shared';
import { LayoutModule } from '@/layout';
import { AuthModule } from '@/auth';
import { StorageModule } from '@/storage';

import { StartupService } from './startup.service';
import { AppConfigService } from './app-config.service';
import { AppService } from './app.service';
import { Router } from '@angular/router';

export const startupFactory = (srv: StartupService) => {
  return () => srv.load();
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    StorageModule.forRoot(),
    CoreModule,
    LayoutModule,
    HttpClientModule,
    NgZorroAntdModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [
    StartupService,
    AppConfigService,
    AppService,
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: startupFactory,
      deps: [StartupService]
    },
    {
      provide: NZ_I18N,
      useValue: zh_CN
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    // console.log(router.config);
  }
}
