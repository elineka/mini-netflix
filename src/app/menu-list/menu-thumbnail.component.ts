import { Component, Input } from '@angular/core';


@Component({
  selector: 'menu-thumbnail',
  template:`
  <div class="well hoverwell thumbnail">
      
      <img [src]="event.imageUrl"/>
      <h3>Movie name: {{event.movie}}</h3>
      <div>Year of release: {{event.year}}
      </div>
    </div>`
}) 
export class MenuThumbnailComponent {
    @Input() event: any
}