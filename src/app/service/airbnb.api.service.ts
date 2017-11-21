import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Api } from './api';
import { GoogleApiService } from './google.api.service';

@Injectable()
export class AirbnbApiService extends Api {

  private baseUrl = 'https://api.airbnb.com';
  private gapi: GoogleApi;

  constructor(private http: HttpClient,
              private googleApiService: GoogleApiService) {
    super();
  }

  public getListing(): Observable<any[]> {
    console.log('get listing...');

    return this.http
      .get(
        this.PROXY_URL +
        this.baseUrl +
        '/v2/listings?locale=en-US&_offset=0&user_id=45188796' +
        '&currency=USD&_limit=10&_format=v1_legacy_long&client_id=3092nxybyb0otqw18e8nh5nty'
      )
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public async logInByGoogle() {
    this.gapi = await this.getGapi();
    const access_token =
      this.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;

    console.log('access_token', access_token);

    return this.http
      .post(
        this.baseUrl +
        '/v1/authorize',
        {
          locale: 'en-US',
          client_id: 'd306zoyjsyarp7ifhu67rjxn52tv0t20',
          prevent_account_creation: true,
          assertion_type: 'https://www.googleapis.com/oauth2/v1/userinfo',
          assertion: access_token
        }, {
          headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
          })
        });
  }

  public sendMessage(id: number, message: string) {
    return this.http
      .post(
        'https://98nhqk1s77.execute-api.ap-southeast-1.amazonaws.com/prod/message',
        {
          thread_id: id,
          message
        }, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'method': 'POST'
          })
        });
  }

  public requestShuttleService(confirmCode, amount, message) {
    return this.http
      .post(
        'https://ydlc96trt9.execute-api.ap-southeast-1.amazonaws.com/dev/service/shuttle',
        {
          confirmCode,
          amount,
          message
        }, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        });

  }

  private async getGapi() {
    if (!this.gapi) {
      this.gapi = await this.googleApiService.getClient();
    }
    return this.gapi;
  }
}
