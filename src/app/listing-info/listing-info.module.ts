import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgCustomMaterialModule } from '../ng-material/ng-material.module';
import { ListingInfoCheckInModule } from './listing-info-check-in/listing-info-check-in.module';
import { ListingInfoHouseRulesModule } from './listing-info-house-rules/listing-info-house-rules.module';
import { ListingInfoLocationModule } from './listing-info-location/listing-info-location.module';
import { ListingInfoComponent } from './listing-info.component';

import { ListingInfoDict } from './listing-info.const';
import { ListingInfoResolve } from './listing-info.resolve';
import { routes } from './listing-info.routes';
import { ListingInfoService } from './listing-info.service';

@NgModule({
  declarations: [
    ListingInfoComponent
  ],
  imports: [
    ListingInfoLocationModule,
    ListingInfoCheckInModule,
    ListingInfoHouseRulesModule,
    NgCustomMaterialModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ListingInfoService,
    ListingInfoResolve
  ]
})

export class ListingInfoModule {
  public listingInfoDict = ListingInfoDict;

}
