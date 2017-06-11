import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListingInfoHouseRulesComponent } from './listing-info-house-rules.component';

@NgModule({
  declarations: [
    ListingInfoHouseRulesComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ListingInfoHouseRulesComponent
      }
    ])
  ],
  exports: [
    ListingInfoHouseRulesComponent
  ]
})

export class ListingInfoHouseRulesModule {

}
