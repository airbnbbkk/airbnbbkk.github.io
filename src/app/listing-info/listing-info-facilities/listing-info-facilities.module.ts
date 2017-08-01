import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgCustomMaterialModule } from '../../ng-material/ng-material.module';
import { ListingInfoFacilitiesComponent } from './listing-info-facilities.component';
import { TranslationModule } from '../../service/translationModule.provider';

@NgModule({
  declarations: [
    ListingInfoFacilitiesComponent
  ],
  imports: [
    NgCustomMaterialModule,
    TranslationModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListingInfoFacilitiesComponent
      }
    ])
  ],
  exports: [
    ListingInfoFacilitiesComponent
  ]
})

export class ListingInfoFacilitiesModule {

}
