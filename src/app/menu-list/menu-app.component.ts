import { Component } from '@angular/core';


@Component({
  selector: 'menu-app',
  template: `
  <div>
  <div><h2>Latest movies</h2></div>
    <hr>
    
    <div class="row">
    <div *ngFor= "let event of events" class="well hoverwell thumbnail" class="col-md-4">
    <menu-thumbnail [event] = "event"> </menu-thumbnail>
    </div>
    </div>`,
    styles: [`
    .thumbnail { mini-height: 300px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
    `]
}) 
export class MenuAppComponent {
  events = [
  {
    id: 1,
  imageUrl: '/assets/images/avengers.jpg',
movie: 'Avengers',
year: '2019'
},
{
  id: 2,
  movie: 'Wonder Park',
  year: '2018',
  imageUrl: '/assets/images/wonder.jpg'
},
{
  id: 3,
  movie: 'Lion King',
  year: '2016',
  imageUrl: '/assets/images/Lion King.jpg' 
},


{
  id: 4,
  movie: 'Snitch',
  year: '2015',
  imageUrl: '/assets/images/snitch.jpg' 
},
{
  id: 5,
  movie: 'War',
  year: '2014',
  imageUrl: '/assets/images/war.jpg' 
},
{
  id: 6,
  movie: 'English animal',
  year: '2014',
  imageUrl: '/assets/images/English animal.jpg' 
},
{
  id: 7,
  movie: 'Fast and Furious',
  year: '2017',
  imageUrl: '/assets/images/Fast and Furrious.jpg' 
}
]
}
