import { NgModule } from '@angular/core';
import { NgCustomMaterialModule } from '../../ng-material/ng-material.module';
import { ListingComponent } from './listing.component';

@NgModule({
  declarations: [
    ListingComponent
  ],
  imports: [
    NgCustomMaterialModule
  ],
  exports: [
    ListingComponent
  ]
})

export class ListingModule {

}
