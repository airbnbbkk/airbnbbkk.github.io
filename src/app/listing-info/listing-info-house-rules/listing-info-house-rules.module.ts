import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListingInfoHouseRulesComponent } from './listing-info-house-rules.component';
import { NgCustomMaterialModule } from '../../ng-material/ng-material.module';
import { TranslationModule } from '../../service/translationModule.provider';

@NgModule({
  declarations: [
    ListingInfoHouseRulesComponent
  ],
  imports: [
    CommonModule,
    NgCustomMaterialModule,
    TranslationModule,
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
