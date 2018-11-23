import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({})
export class LoopbackSDKModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LoopbackSDKModule,
      providers: []
    };
  }
}
