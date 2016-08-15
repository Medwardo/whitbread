import { Component, OnInit } from '@angular/core';
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

  constructor (private appComponentService: AppComponentService) {}

  ngOnInit () {
    this.appComponentService.getResults().subscribe(
      results => this.results = results
    );
  }
}
