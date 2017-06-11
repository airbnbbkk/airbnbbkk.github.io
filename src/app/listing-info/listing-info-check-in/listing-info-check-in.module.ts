import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListingInfoCheckInComponent } from './listing-info-check-in.component';

@NgModule({
  declarations: [
    ListingInfoCheckInComponent
  ],
  imports: [
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
