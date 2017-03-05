import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

  private proxyUrl = 'https://crossorigin.me/';

  private baseUrl = 'https://api.airbnb.com/v2/';

  constructor(
    private http: Http
  ) {

  }

  public getListing(): Observable<any[]> {
    console.log('get listing...');

    return this.http
               .get(
                 this.proxyUrl +
                 this.baseUrl +
                 'listings?locale=en-US&_offset=0&user_id=45188796&has_availability=false' +
                 '&currency=USD&_limit=10&_format=v1_legacy_long' +
                 '&client_id=3092nxybyb0otqw18e8nh5nty')
               .map((res: Response) => res.json())
               .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
