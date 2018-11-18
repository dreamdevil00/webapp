import { I18NService } from '@/core/i18n/i18n.service';
import { Component } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
@Component({
  selector: 'app-root',
  template: `
    <div class="spinner"><nz-spin [nzSpinning]="loading"></nz-spin></div>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      .spinner {
      }
    `
  ]
})
export class AppComponent {
  loading = false;
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      this.checkRouterEvent(event);
    });
  }

  checkRouterEvent(event: Event) {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }

    if (
      event instanceof NavigationEnd ||
      event instanceof NavigationCancel ||
      event instanceof NavigationError
    ) {
      this.loading = false;
    }
  }
}
