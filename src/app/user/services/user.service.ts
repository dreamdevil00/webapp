import { User } from '@/user/interfaces';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
@Injectable()
export class UserService {
  constructor() {}

  findUserById(id: string): Observable<User> {
    return of<User>(new User(id, 'foo'));
  }
}
