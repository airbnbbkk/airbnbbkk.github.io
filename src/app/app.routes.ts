import { Routes } from '@angular/router';
import { HomeComponent } from './component/home';
import { AboutComponent } from './component/about';
import { NoContentComponent } from './component/no-content';
import { PageListingComponent } from './component/page-listing';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'listing', component: PageListingComponent},
  {path: '**', component: NoContentComponent},
];
