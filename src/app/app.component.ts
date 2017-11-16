/**
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { AppState } from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    'app.component.scss'
  ],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  constructor(public appState: AppState,
              private translate: TranslateService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    // Using Rx's built in `distinctUntilChanged ` feature to handle url change c/o @dloomb's answer
    router.events.distinctUntilChanged((previous: any, current: any) => {
      // Subscribe to any `NavigationEnd` events where the url has changed
      if (current instanceof NavigationEnd) {
        return previous.url === current.url;
      }
      return true;
    }).subscribe((x: any) => {
      window['ga']('set', 'page', x.url);
      window['ga']('send', 'pageview');
    });
  }

  public ngOnInit() {
    this.translate.setDefaultLang('en');
    this.activatedRoute.queryParams
      .subscribe((params: Params) => {
        console.log('lang', params['lang']);
        this.translate.use(params['lang'] || this.translate.currentLang);
        if (params['code']) {
          this.appState.set('confirmationCode', params['code']);
        }
      });
    console.log('Initial App State', this.appState.state);
  }
}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
