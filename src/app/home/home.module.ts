import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListingsModule } from '../listings/listings.module';
import { LogInModule } from '../log-in/log-in.module';
import { NgCustomMaterialModule } from '../ng-material/ng-material.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    NgCustomMaterialModule,
    ListingsModule,
    LogInModule,
    RouterModule.forChild([{
      path: '',
      component: HomeComponent
    }])
  ],
  exports: [
    HomeComponent
  ]
})

export class HomeModule {

}
