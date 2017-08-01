import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgCustomMaterialModule } from '../../ng-material/ng-material.module';
import { ListingComponent } from './listing.component';
import { TranslationModule } from '../../service/translationModule.provider';

@NgModule({
  declarations: [
    ListingComponent
  ],
  imports: [
    RouterModule,
    NgCustomMaterialModule,
    TranslationModule
  ],

  exports: [
    ListingComponent
  ]
})

export class ListingModule {
}
