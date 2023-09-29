import { Component , OnInit} from '@angular/core';
import { Hero } from './../entity/hero';
import { HeroService } from './../service/hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],

})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router,

  ) { };

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  };

  ngOnInit(): void {
    this.getHeroes();
  };

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  };
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  };
  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  };
}
