import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, NoPreloading } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import '../styles/headings.css';
import '../styles/styles.scss';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
/*
 * Platform and Environment providers/directives/pipes
 */
import { environment } from 'environments/environment';
import { ROUTES } from './app.routes';
import { AppState, InternalStateType } from './app.service';
/*
 * Platform and Environment providers/directives/pipes
 */

import { NgCustomMaterialModule } from './ng-material/ng-material.module';
import { NoContentComponent } from './no-content/no-content.component';
import { AirbnbApiService } from './service/airbnb.api.service';
import { GoogleApiService } from './service/google.api.service';
import { SideNavModule } from './side-nav/side-nav.module';
import { HeaderModule } from './header/header.module';
import { NjCapitalizePipe } from './app.pipe';
import { TranslationModule } from './service/translationModule.provider';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState,
  AirbnbApiService,
  GoogleApiService
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    NoContentComponent,
    NjCapitalizePipe
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgCustomMaterialModule,
    BrowserAnimationsModule,
    HeaderModule,
    SideNavModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(ROUTES, {
      useHash: true,
      preloadingStrategy: NoPreloading
    }),
    /**
     * This section will import the `DevModuleModule` only in certain build types.
     * When the module is not imported it will get tree shaked.
     * This is a simple example, a big app should probably implement some logic
     */
    // ...environment.showDevModule ? [DevModuleModule] : [],
  ],
  exports: [
    TranslationModule
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    environment.ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {
}
