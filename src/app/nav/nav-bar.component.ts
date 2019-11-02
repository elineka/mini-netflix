import { Component } from '@angular/core'
@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [`
    .nav.navbar-nav {font-size: 15px;}
    .form-control {margin-right: 30px;}
    @media (max-width: 1200px) {.form-control {display:none}}
    `]

})
export class NavBarComponent{

}
