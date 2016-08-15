import { addProviders, inject } from '@angular/core/testing';

// import { provide } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { AppComponent } from './app.component';
import { AppComponentService } from './app.component.service';
import { Result } from './result';

class MockAppComponentService {

    private results: Result[] = [{'id': '1', 'name': 'Test 1'}, {'id': '2', 'name': 'Test 2'}, {'id': '3', 'name': 'Test 3'}];

    getResults () {
        return Observable.of(this.results);
    }
}

beforeEach(() => {
    addProviders([{provide: AppComponentService, useClass: MockAppComponentService},
    {provide: AppComponent, useClass: AppComponent}]);
});

describe('Testing App Component', () => {

    it('should get a list of results from service', inject([AppComponent],
        (component: AppComponent) => {
        component.submitSearch();
        expect(component.results.length).toBe(3);
        expect(component.results[0].name).toBe('Test 1');
    }));

    it('should show more results when showMoreResults() is called', inject([AppComponent],
        (component: AppComponent) => {

        component.pageSize = 1;

        component.submitSearch();
        expect(component.resultsForDisplay.length).toBe(1);
        expect(component.resultsForDisplay[0].name).toBe('Test 1');

        component.showMoreResults();
        expect(component.resultsForDisplay.length).toBe(2);
        expect(component.resultsForDisplay[1].name).toBe('Test 2');
    }));

});
