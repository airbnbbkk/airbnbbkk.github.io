import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgCustomMaterialModule } from '../../ng-material/ng-material.module';
import { ListingInfoDict } from '../listing-info.const';
import { ListingInfoLocationComponent } from './listing-info-location.component';
import { TranslationModule } from '../../service/translationModule.provider';

@NgModule({
  declarations: [
    ListingInfoLocationComponent
  ],
  imports: [
    NgCustomMaterialModule,
    TranslationModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListingInfoLocationComponent
      }
    ])
  ],
  exports: [
    ListingInfoLocationComponent
  ]
})

export class ListingInfoLocationModule {
  public LISTING_INFOS = ListingInfoDict;
}
