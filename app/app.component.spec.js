"use strict";
var testing_1 = require('@angular/core/testing');
// import { provide } from '@angular/core';
var Rx_1 = require('rxjs/Rx');
var app_component_1 = require('./app.component');
var app_component_service_1 = require('./app.component.service');
var MockAppComponentService = (function () {
    function MockAppComponentService() {
        this.results = [{ 'id': '1', 'name': 'Test 1' }, { 'id': '2', 'name': 'Test 2' }, { 'id': '3', 'name': 'Test 3' }];
    }
    MockAppComponentService.prototype.getResults = function () {
        return Rx_1.Observable.of(this.results);
    };
    return MockAppComponentService;
}());
beforeEach(function () {
    testing_1.addProviders([{ provide: app_component_service_1.AppComponentService, useClass: MockAppComponentService },
        { provide: app_component_1.AppComponent, useClass: app_component_1.AppComponent }]);
});
describe('Testing App Component', function () {
    it('should get a list of results from service', testing_1.inject([app_component_1.AppComponent], function (component) {
        component.submitSearch();
        expect(component.results.length).toBe(3);
        expect(component.results[0].name).toBe('Test 1');
    }));
    it('should show more results when showMoreResults() is called', testing_1.inject([app_component_1.AppComponent], function (component) {
        component.pageSize = 1;
        component.submitSearch();
        expect(component.resultsForDisplay.length).toBe(1);
        expect(component.resultsForDisplay[0].name).toBe('Test 1');
        component.showMoreResults();
        expect(component.resultsForDisplay.length).toBe(2);
        expect(component.resultsForDisplay[1].name).toBe('Test 2');
    }));
});
//# sourceMappingURL=app.component.spec.js.map