import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

import { AppRoutingModule } from '@/app-routing.module';
import { AppComponent } from '@/app.component';
import { PageNotFoundComponent } from '@/components/page-not-found.component';

import { CoreModule } from '@/core';
import { SharedModule } from '@/shared';
import { LayoutModule } from '@/layout';
import { AuthModule } from '@/auth';

import { AppConfigService } from '@/app-config.service';
import { Router } from '@angular/router';

const appConfigFactory = (srv: AppConfigService) => {
  return () => srv.load();
};

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    LayoutModule,
    HttpClientModule,
    NgZorroAntdModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [
    /*
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: appConfigFactory
    }, */
    {
      provide: NZ_I18N,
      useValue: zh_CN
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log(router.config);
  }
}
