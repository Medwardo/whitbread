import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import './rxjs-operators';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [HTTP_PROVIDERS]
})

export class AppComponent {}
