import {Component} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink } from 'angular2/router';
import {Hero} from './hero';
import {HeroDetailComponent} from "./detail/hero-detail.component";
import {HeroListComponent} from "./list/hero-list.component";

@Component({
    selector: 'hero',
    templateUrl: 'app/hero/hero.html',
    styleUrls: ['app/hero/hero.css'],
    directives: [CORE_DIRECTIVES, RouterLink, HeroDetailComponent, HeroListComponent]
})

export class HeroComponent {
    public selectedHero: Hero;
    public selectHero(hero: Hero) {
        this.selectedHero = hero;
    }
}