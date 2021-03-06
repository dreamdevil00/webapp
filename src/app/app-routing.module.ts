import { PageNotFoundComponent } from '@/shared/components';
import { LayoutFullComponent } from '@/layout/full/layout-full.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutFullComponent, // shell component
    children: [
      {
        path: 'users',
        loadChildren: './user/user.module#UserModule'
      }
    ]
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
