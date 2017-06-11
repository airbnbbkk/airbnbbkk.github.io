import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content/no-content.component';

export const ROUTES: Routes = [
  {path: '', loadChildren: './#HomePageModule'},
  {path: 'home', loadChildren: './#HomePageModule'},
  {path: 'listing', loadChildren: './#ListingsModule'},
  {path: 'listing-info', loadChildren: './#ListingInfoModule'},
  {path: '**', component: NoContentComponent}
];
