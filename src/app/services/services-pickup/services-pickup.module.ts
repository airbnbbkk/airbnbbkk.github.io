import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesPickupComponent } from './services-pickup.component';
import { NgCustomMaterialModule } from '../../ng-material/ng-material.module';
import { TranslationModule } from '../../service/translationModule.provider';
import { ServicesPickupBookingDialogComponent } from './dialog-booking/services-pickup-booking';

@NgModule({
  declarations: [
    ServicesPickupComponent,
    ServicesPickupBookingDialogComponent
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
  entryComponents: [ServicesPickupBookingDialogComponent],
  exports: [
    ServicesPickupComponent
  ]
})

export class ServicesPickupModule {

}
