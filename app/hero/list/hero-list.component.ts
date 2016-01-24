import {Component} from 'angular2/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {OnInit} from 'angular2/core';
import {EventEmitter} from 'angular2/core';

@Component({
    selector: 'hero-list',
    templateUrl: 'app/hero/list/hero-list.html',
    styleUrls: ['app/hero/hero.css'],
    outputs: ['onSelectHero'],
    providers: [HeroService]
})

export class HeroListComponent implements OnInit{
    public heroes: Hero[];
    public hero: Hero;
    public onSelectHero: EventEmitter<Hero> = new EventEmitter();

    constructor(private _heroService: HeroService) {

    }

    ngOnInit():Promise<Hero> {
        return this._getHeroes().then(heroes => this.heroes = heroes);
    }

    private _getHeroes() {
        return this._heroService.getHeroes();
    }

    public onSelect (hero: Hero) {
        this.hero = hero;
        this.onSelectHero.emit(hero);
    };
}