import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-simple',
  template: `
    <router-outlet></router-outlet>
  `
})
export class LayoutSimpleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
