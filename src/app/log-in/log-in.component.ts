import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { AirbnbApiService } from '../service/airbnb.api.service';
import { GoogleApiService } from '../service/google.api.service';

@Component({
  selector: 'nj-log-in',
  providers: [],
  animations: [
    trigger('logInInputState', [
      state('inactive', style({
        height: '1rem'
      })),
      state('active', style({
        height: '*'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ],
  styleUrls: ['log-in.component.scss'],
  templateUrl: 'log-in.component.html'
})
export class LogInComponent {

  public logInInputState = 'inactive';

  private gapi: GoogleApi;

  constructor(private googleApiService: GoogleApiService,
              private airbnbApiService: AirbnbApiService) {
    this.init();
  }

  public async setLogInInputState(state: string) {
    this.logInInputState = state;

  }

  public login() {
    let auth = this.gapi.auth2.getAuthInstance().signIn();
    console.log('login result', auth);
    this.airbnbApiService.logInByGoogle()
      .then(res => {
        res.subscribe(obRes => {
          console.log('login by google result: ', obRes);
        });
      })
      .catch(err => {
        console.log('err login by google', err);
      });
  }

  private async init() {
    this.gapi = await this.googleApiService.getClient();
  }
}
