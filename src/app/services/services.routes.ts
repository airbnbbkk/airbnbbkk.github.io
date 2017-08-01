import { ServicesComponent } from './services.component';

export const routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      {path: '', redirectTo: 'pickup', pathMatch: 'full'},
      {
        path: 'pickup',
        loadChildren: './services-pickup/services-pickup.module#ServicesPickupModule'
      }
    ]
  }
];
