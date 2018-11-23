import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './http.service';
@NgModule({
  imports: [CommonModule]
})
export class HttpServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HttpServiceModule,

      providers: [HttpService]
    };
  }
}
