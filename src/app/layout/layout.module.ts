import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutSimpleComponent } from './simple/layout-simple.component';
import {
  LayoutHeaderComponent,
  LayoutFooterComponent,
  LayoutMainComponent,
  LayoutSidebarComponent,
  LayoutFullComponent
} from './full';

const components = [
  LayoutSimpleComponent,
  LayoutFullComponent,
  LayoutHeaderComponent,
  LayoutFooterComponent,
  LayoutMainComponent,
  LayoutSidebarComponent
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule],
  exports: [...components]
})
export class LayoutModule {}
