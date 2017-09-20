import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ServicesPickupComponent
  ]
})

export class ServicesPickupModule {

}
