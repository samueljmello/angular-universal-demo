import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SeriesResolve implements Resolve<any> {

  private series;
  private apiUrl = 'https://int.crossroads.net/proxy/content/api/';

  constructor(private http: Http) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.getSeries();
  }

  private getSeries(): Observable<any> {
    return this.http.get(`${this.apiUrl}series`)
      .map(this.dataToJson)
      .catch(this.observableError);
  }

  private dataToJson(response) {
    return response.json() || undefined;
  }

  private observableError(err) {
    return [err];
  }

}
