System.register(['angular2/core', "../hero.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_service_1, core_2;
    var HeroListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroListComponent = (function () {
                function HeroListComponent(_heroService) {
                    this._heroService = _heroService;
                    this.onSelectHero = new core_2.EventEmitter();
                }
                HeroListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._getHeroes().then(function (heroes) { return _this.heroes = heroes; });
                };
                HeroListComponent.prototype._getHeroes = function () {
                    return this._heroService.getHeroes();
                };
                HeroListComponent.prototype.onSelect = function (hero) {
                    this.hero = hero;
                    this.onSelectHero.emit(hero);
                };
                ;
                HeroListComponent = __decorate([
                    core_1.Component({
                        selector: 'hero-list',
                        templateUrl: 'app/hero/list/hero-list.html',
                        styleUrls: ['app/hero/hero.css'],
                        outputs: ['onSelectHero'],
                        providers: [hero_service_1.HeroService]
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], HeroListComponent);
                return HeroListComponent;
            })();
            exports_1("HeroListComponent", HeroListComponent);
        }
    }
});
