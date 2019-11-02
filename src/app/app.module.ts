import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavigationAppComponent } from './navigation-app.component';
import { MenuAppComponent } from './menu-list/menu-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { MenuThumbnailComponent } from './menu-list/menu-thumbnail.component';

@NgModule({
  declarations: [
    
    NavigationAppComponent,
    MenuAppComponent,
    NavBarComponent,
    MenuThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [NavigationAppComponent],
  
})
export class AppModule { }
