import {Component} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink } from 'angular2/router';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.html',
    styleUrls: ['app/hero/hero.css'],
    directives: [CORE_DIRECTIVES, RouterLink]
})

export class HomeComponent {

}