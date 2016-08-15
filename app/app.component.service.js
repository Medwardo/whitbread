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
var Observable_1 = require('rxjs/Observable');
// import { Result } from './result';
var GlobalVars = require('./global.vars');
var AppComponentService = (function () {
    function AppComponentService(http) {
        this.http = http;
    }
    AppComponentService.prototype.getResults = function () {
        return this.http.get(GlobalVars.fourSquareUrl + GlobalVars.sampleLocation + GlobalVars.token)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AppComponentService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body.response.venues);
        return body.response.venues || {};
    };
    AppComponentService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    AppComponentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponentService);
    return AppComponentService;
}());
exports.AppComponentService = AppComponentService;
//# sourceMappingURL=app.component.service.js.map