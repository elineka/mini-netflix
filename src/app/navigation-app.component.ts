import { Component } from '@angular/core';

@Component({
  selector: 'navigation-app',
  template: 
  `
  <nav-bar></nav-bar>
  <menu-app></menu-app>
  `

})
export class NavigationAppComponent {
  title = 'mini-netflix';
}
