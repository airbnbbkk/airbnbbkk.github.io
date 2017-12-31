import { Component } from '@angular/core';
import { ServicesPickupInfo } from './services-pickup.const';
import { TranslationModule } from '../../service/translationModule.provider';
import { ServicesPickupDialogBookingComponent } from './dialog-booking/services-pickup-dialog-booking';
import { MatDialog } from '@angular/material';
import { AppState } from '../../app.service';

@Component({
  selector: 'nj-services-pickup',
  styleUrls: ['services-pickup.component.scss'],
  templateUrl: 'services-pickup.component.html'
})
export class ServicesPickupComponent {
  public pickupInfo: PickupServiceInfo;

  constructor(public translate: TranslationModule,
              public dialog: MatDialog,
              public appState: AppState) {
    this.pickupInfo = ServicesPickupInfo;
  }

  public openDialog(vehicle: PickupVehicle) {
    console.log('confirmation code', this.appState.get('confirmationCode'));
    this.dialog.open(ServicesPickupDialogBookingComponent, {
      panelClass: 'nj-booking-dialog',
      height: '90%',
      data: {
        pickupInfo: this.pickupInfo,
        selectedVehicle: vehicle,
        confirmCode: this.appState.get('confirmationCode')
      }
    });
  }
}
