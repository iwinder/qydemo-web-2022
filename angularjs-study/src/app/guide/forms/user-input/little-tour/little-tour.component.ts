import { Component } from '@angular/core';

@Component({
    selector: 'app-little-tour',
    templateUrl: './little-tour.component.html'
})

export class LittleTourComponent {
    heroes = ['Windstorm', 'WindCoder.com', 'Bombasto', 'Magneta' ];

   addHero(newhero: string) {
       if ( newhero.trim().length <= 0 ) {
          return;
       }
       this.heroes.push(newhero);
   }
}
