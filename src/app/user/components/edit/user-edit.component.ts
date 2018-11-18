import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {
  isDirty = false;
  username: string;
  constructor() {}

  ngOnInit() {}
}
