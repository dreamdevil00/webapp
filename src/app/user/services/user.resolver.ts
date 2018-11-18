import { User } from '@/user/interfaces';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { UserService } from '@/user/services/user.service';
@Injectable()
export class UserResolver implements Resolve<User> {
  constructor(private userSrv: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params.id;
    return this.userSrv.findUserById(id);
  }
}
