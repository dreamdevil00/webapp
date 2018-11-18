import { NgModule } from '@angular/core';

import {
  UserComponent,
  UserEditComponent,
  UserInfoComponent,
  UserListComponent
} from './components';

import { UserService, UserEditGuard, UserResolver } from './services';

@NgModule({
  imports: [],
  exports: [],
  declarations: [
    UserComponent,
    UserEditComponent,
    UserInfoComponent,
    UserListComponent
  ],
  providers: [UserService, UserEditGuard, UserResolver]
})
export class UserModule {}
