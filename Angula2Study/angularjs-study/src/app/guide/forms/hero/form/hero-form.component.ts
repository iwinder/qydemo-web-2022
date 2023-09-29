import { Component } from '@angular/core';
import { Hero } from './../common/entity/hero';

@Component({
    selector: 'app-hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: ['./hero-form.component.scss']
})

export class HeroFormComponent {
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet')
    submitted = false;
    onSubmit() { this.submitted = true; }
    get diagnostic() {
        return JSON.stringify(this.model);
    }
    newHero() {
        this.model = new Hero(42, '', '');
    }
}
