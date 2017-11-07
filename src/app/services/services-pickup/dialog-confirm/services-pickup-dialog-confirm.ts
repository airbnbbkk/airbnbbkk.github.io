import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { TranslationModule } from '../../../service/translationModule.provider';
import { AirbnbApiService } from '../../../service/airbnb.api.service';

@Component({
  selector: 'services-pickup-dialog-confirm',
  templateUrl: 'services-pickup-dialog-confirm.html',
  styleUrls: ['services-pickup-dialog-confirm.scss']
})
export class ServicesPickupDialogConfirmComponent {

  public submitted = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialog,
              public confirmDialog: MatDialogRef<ServicesPickupDialogConfirmComponent>,
              private airbnbApi: AirbnbApiService,
              public translate: TranslationModule) {

  }

  public async submit() {
    const msgLink = `Message: https://www.airbnb.com/messaging/qt_for_reservation/${this.data.bookingNumber}`;

    this.submitted = true;

    const res = this.airbnbApi.sendMessage(276569855, this.data.message + msgLink);

    const subs = res.subscribe((r: any) => {
      console.log('response', r);
      this.dialog.closeAll();
      alert('your request has been sent.\n\nThe host will contact you shortly.');
    }, err => {
      alert('Failed to send request. If the problem persists, please contact the host.');
      this.submitted = false;
    }, async () => {
      await subs.unsubscribe();
    });
  }
}
