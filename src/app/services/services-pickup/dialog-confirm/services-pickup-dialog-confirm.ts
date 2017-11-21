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
    this.submitted = true;

    const res = this.airbnbApi.sendMessage(276569855, this.data.message);
    const resTemp = this.airbnbApi.requestShuttleService(this.data.bookingNumber, this.data.amount, this.data.message);

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

    const resTempSubs = resTemp.subscribe((r: any) => {
      console.log('response', r);
    }, err => {
    }, async () => {
      await resTempSubs.unsubscribe();
    });
  }
}
