import { UserEditGuard } from '@/user/services/user-edit.guard';
import { UserEditComponent } from '@/user/components/edit/user-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserResolver } from '@/user/services/user.resolver';
import { UserInfoComponent, UserListComponent } from './components';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: UserListComponent },
      {
        path: ':id/edit',
        component: UserEditComponent,
        canDeactivate: [UserEditGuard],
        resolve: { user: UserResolver },
        children: [
          { path: '', redirectTo: 'info', pathMatch: 'full' },
          { path: 'info', component: UserInfoComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: []
})
export class UserRoutingModule {}
