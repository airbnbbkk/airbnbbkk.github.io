import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Api} from "./api";

@Injectable()
export class GoogleApiService extends Api {

  private API_URL = 'https://apis.google.com/js/api.js';
  private gapi: GoogleApi;
  private GoogleAuth: any;

  constructor(
    private http: Http
  ) {
    super();
  }

  public async getClient() {
    if (!this.gapi) {
      let api = await this.getApi();
      console.log('api', api);
      new Function(api['_body'])();
      this.gapi = window['gapi'];
      this.gapi.load('client:auth2', () => {
        return this.initClient();
      });
    }
    return this.gapi;
  }

  private async getApi() {
    console.log('getting Google Api...');
    return await this.http.get(this.PROXY_URL + this.API_URL).toPromise();
  }

  private initClient() {
    this.gapi.client.init({
      apiKey: 'AIzaSyB3Iy2TK3Yyd9nFTQgM6n375LMqB8GQKk0',
      clientId: '873328552635-kig6sktb4ha9lglu7ajo7ek404834e0p.apps.googleusercontent.com',
      scope: 'profile email',
      discoveryDocs: ['https://people.googleapis.com/$discovery/rest?version=v1']
    }).then(() => {

      // Listen for sign-in state changes.
      this.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

      // Handle the initial sign-in state.
      updateSigninStatus(this.gapi.auth2.getAuthInstance().isSignedIn.get());

      function updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
          console.log('signed in!');
        } else {
          console.log('authorization failed!');
        }
      }
    });
  }

}
