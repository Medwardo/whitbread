import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import * as GlobalVars from './global.vars';

@Injectable()
export class AppComponentService {

    constructor (private http: Http) {}

    public getResults (location: string) {
        return this.http.get(GlobalVars.fourSquareUrl + location + GlobalVars.token)
                 .map(this.extractData)
                 .catch(this.handleError);
    }

    public extractData (res: Response) {
        let body = res.json();
        console.log(body.response.venues);
        return body.response.venues || { };
    }
    public handleError (error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
