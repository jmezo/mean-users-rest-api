import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})

export class MainLayoutComponent {

}
