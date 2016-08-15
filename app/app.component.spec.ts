import { addProviders, inject } from '@angular/core/testing';

// import { provide } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { AppComponent } from './app.component';
import { AppComponentService } from './app.component.service';
import { Result } from './result';

class MockAppComponentService {

    private results: Result[] = [{'Id': '12234', 'Name': 'Test'}];

    getResults () {
        return Observable.of(this.results);
    }
}

beforeEach(() => {
    addProviders([{provide: AppComponentService, useClass: MockAppComponentService},
    {provide: AppComponent, useClass: AppComponent}]);
});

describe('Testing App Component', () => {

    it('should get a list of results from service OnInit', inject([AppComponent],
        (component: AppComponent) => {
        component.ngOnInit();
        expect(component.results.length).toBe(1);
    }));

});
