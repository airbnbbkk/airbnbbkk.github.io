import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListingInfoCheckInComponent } from './listing-info-check-in.component';
import { NgCustomMaterialModule } from '../../ng-material/ng-material.module';
import { TranslationModule } from '../../service/translationModule.provider';
import { ListingInfoCheckOutImgDialogComponent } from './listing-info-check-out-img.component';

@NgModule({
  declarations: [
    ListingInfoCheckInComponent,
    ListingInfoCheckOutImgDialogComponent
  ],
  imports: [
    NgCustomMaterialModule,
    TranslationModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListingInfoCheckInComponent
      }
    ])
  ],
  entryComponents: [ListingInfoCheckOutImgDialogComponent],
  exports: [
    ListingInfoCheckInComponent
  ]
})
export class ListingInfoCheckInModule {

}
