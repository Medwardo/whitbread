import { Component, Input } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import './rxjs-operators';

import { AppComponentService } from './app.component.service';
import { Result } from './result';
import * as GlobalVars from './global.vars';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [HTTP_PROVIDERS, AppComponentService]
})

export class AppComponent {

  public results: Result[];
  public resultsForDisplay: Result[];
  public noResults: boolean;
  public locationForDisplay: string;
  public showMoreButton: boolean = false;
  public pageSize: number;
  @Input() location: string;

  constructor (private appComponentService: AppComponentService) {
    this.pageSize = GlobalVars.pageSize;
    this.noResults = false;
  }

  submitSearch () {
    this.appComponentService.getResults(this.location).subscribe(
      results => {
        this.results = results;
        this.resultsForDisplay = results.slice(0, this.pageSize);
        this.noResults = false;
        this.locationForDisplay = this.location;
        if (this.results.length > this.resultsForDisplay.length) {
          this.showMoreButton = true;
        }
      },
      error => {
        this.noResults = true;
        this.results = undefined;
      }
    );
  }

  showMoreResults () {
    this.resultsForDisplay = this.results.slice(0, this.resultsForDisplay.length + this.pageSize);
    if (this.resultsForDisplay.length >= this.results.length) {
      this.showMoreButton = false;
    }
  }
}
