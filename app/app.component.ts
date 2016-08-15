import { Component, OnInit, Input } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import './rxjs-operators';

import { AppComponentService } from './app.component.service';
import { Result } from './result';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [HTTP_PROVIDERS, AppComponentService]
})

export class AppComponent implements OnInit {

  public results: Result[];
  @Input()  location: string;

  constructor (private appComponentService: AppComponentService) {}

  ngOnInit () {

  }

  submitSearch () {
    this.appComponentService.getResults(this.location).subscribe(
      results => this.results = results
    );
  }
}
