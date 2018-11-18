import { UserEditComponent } from '@/user/components/edit/user-edit.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
@Injectable()
export class UserEditGuard implements CanDeactivate<UserEditComponent> {
  constructor() {}

  canDeactivate(component: UserEditComponent): boolean {
    if (component.isDirty) {
      const username = component.username || 'anonymous';
      return confirm(`如果离开将丢失对 ${username} 所做的更改`);
    }
    return true;
  }
}
