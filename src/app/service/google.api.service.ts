import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class GoogleApiService {
  private API_URL = 'https://apis.google.com/js/api.js';

  constructor(
    private http: Http
  ) {}

  private getApi() {
    console.log('getting Google Api...');
    return this.http
               .get(this.API_URL)
               .map((res: Response) => res.json())
               .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
