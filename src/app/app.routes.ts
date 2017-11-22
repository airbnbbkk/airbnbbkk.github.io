import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content/no-content.component';

export const ROUTES: Routes = [
  {path: '', loadChildren: './home#HomeModule'},
  {path: 'home', loadChildren: './home#HomeModule'},
  {path: 'contacts', loadChildren: './contacts#ContactsModule'},
  {path: 'services', loadChildren: './services#ServicesModule'},
  {path: 'listing', loadChildren: './listings#ListingsModule'},
  {path: 'info', loadChildren: './listing-info#ListingInfoModule'},
  {path: '**', component: NoContentComponent}
];
