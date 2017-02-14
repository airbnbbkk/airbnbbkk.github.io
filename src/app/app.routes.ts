import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { MainComponent } from './main';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  {path: '', component: MainComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'detail', loadChildren: './+detail#DetailModule'},
  {path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  {path: '**', component: NoContentComponent},
];
