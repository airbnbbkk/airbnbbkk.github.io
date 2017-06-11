import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgCustomMaterialModule } from '../ng-material/ng-material.module';
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
    NgCustomMaterialModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ListingInfoService,
    ListingInfoResolve
  ],
  exports: [
    ListingInfoComponent
  ]
})

export class ListingInfoModule {
  public listingInfoDict = ListingInfoDict;

}
