import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListingInfoCheckInComponent } from './listing-info-check-in.component';
import { NgCustomMaterialModule } from '../../ng-material/ng-material.module';

@NgModule({
  declarations: [
    ListingInfoCheckInComponent
  ],
  imports: [
    NgCustomMaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListingInfoCheckInComponent
      }
    ])
  ],
  exports: [
    ListingInfoCheckInComponent
  ]
})

export class ListingInfoCheckInModule {

}
