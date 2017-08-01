import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListingInfoComponent } from './listing-info.component';
import { ListingInfoResolve } from './listing-info.resolve';
import { routes } from './listing-info.routes';
import { ListingInfoService } from './listing-info.service';
import { TranslationModule } from '../service/translationModule.provider';
import { NgCustomMaterialModule } from '../ng-material/ng-material.module';

@NgModule({
  declarations: [
    ListingInfoComponent
  ],
  imports: [
    NgCustomMaterialModule,
    TranslationModule,
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

}
