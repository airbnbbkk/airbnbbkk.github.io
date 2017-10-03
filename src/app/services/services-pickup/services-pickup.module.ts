import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesPickupComponent } from './services-pickup.component';
import { NgCustomMaterialModule } from '../../ng-material/ng-material.module';
import { TranslationModule } from '../../service/translationModule.provider';
import { ServicesPickupDialogBookingComponent } from './dialog-booking/services-pickup-dialog-booking';
import { ServicesPickupDialogConfirmComponent } from './dialog-confirm/services-pickup-dialog-confirm';

@NgModule({
  declarations: [
    ServicesPickupComponent,
    ServicesPickupDialogBookingComponent,
    ServicesPickupDialogConfirmComponent
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
  entryComponents: [
    ServicesPickupDialogBookingComponent,
    ServicesPickupDialogConfirmComponent
  ],
  exports: [
    ServicesPickupComponent
  ]
})

export class ServicesPickupModule {

}
