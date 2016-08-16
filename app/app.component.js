"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('./rxjs-operators');
var app_component_service_1 = require('./app.component.service');
var GlobalVars = require('./global.vars');
var AppComponent = (function () {
    function AppComponent(appComponentService) {
        this.appComponentService = appComponentService;
        this.showMoreButton = false;
        this.pageSize = GlobalVars.pageSize;
        this.noResults = false;
        this.category = "";
    }
    AppComponent.prototype.submitSearch = function () {
        var _this = this;
        this.appComponentService.getResults(this.location, this.category).subscribe(function (results) {
            _this.results = results;
            _this.resultsForDisplay = results.slice(0, _this.pageSize);
            _this.noResults = false;
            _this.locationForDisplay = _this.location;
            if (_this.results.length > _this.resultsForDisplay.length) {
                _this.showMoreButton = true;
            }
        }, function (error) {
            _this.noResults = true;
            _this.results = undefined;
            _this.locationForDisplay = _this.location;
        });
    };
    AppComponent.prototype.showMoreResults = function () {
        this.resultsForDisplay = this.results.slice(0, this.resultsForDisplay.length + this.pageSize);
        if (this.resultsForDisplay.length >= this.results.length) {
            this.showMoreButton = false;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AppComponent.prototype, "location", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AppComponent.prototype, "category", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            providers: [http_1.HTTP_PROVIDERS, app_component_service_1.AppComponentService]
        }), 
        __metadata('design:paramtypes', [app_component_service_1.AppComponentService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map