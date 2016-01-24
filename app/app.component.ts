import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeroComponent} from "./hero/hero.component";
import {HeroListComponent} from "./hero/list/hero-list.component";
import {HeroDetailComponent} from "./hero/detail/hero-detail.component";
import {HomeComponent} from "./home/home.component";

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/', as: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/heroes', as: 'Hero', component: HeroComponent}
])

export class AppComponent {
    constructor() {

    }
}