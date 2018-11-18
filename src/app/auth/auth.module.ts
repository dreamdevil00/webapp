import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@/layout';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, LayoutModule],
  declarations: [LoginComponent]
})
export class AuthModule {}
