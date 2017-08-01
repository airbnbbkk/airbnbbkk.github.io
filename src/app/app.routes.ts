import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content/no-content.component';

export const ROUTES: Routes = [
  {path: '', loadChildren: './#HomePageModule'},
  {path: 'home', loadChildren: './#HomePageModule'},
  {path: 'contacts', loadChildren: './#ContactsModule'},
  {path: 'services', loadChildren: './#ServicesModule'},
  {path: 'listing', loadChildren: './#ListingsModule'},
  {path: 'info', loadChildren: './#ListingInfoModule'},
  {path: '**', component: NoContentComponent}
];
