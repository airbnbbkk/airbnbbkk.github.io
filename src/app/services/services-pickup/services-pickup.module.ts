import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServicesPickupComponent } from './services-pickup.component';
import { NgCustomMaterialModule } from '../../ng-material/ng-material.module';
import { TranslationModule } from '../../service/translationModule.provider';

@NgModule({
  declarations: [
    ServicesPickupComponent
  ],
  imports: [
    CommonModule,
    NgCustomMaterialModule,
    TranslationModule,
    RouterModule.forChild([
      {
        path: '',
        component: ServicesPickupComponent
      }
    ])
  ],
  exports: [
    ServicesPickupComponent
  ]
})

export class ServicesPickupModule {

}
