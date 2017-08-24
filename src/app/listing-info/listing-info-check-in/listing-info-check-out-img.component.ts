import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'listing-info-check-out-dialog',
  templateUrl: 'listing-info-check-out-dialog.html'
})
export class ListingInfoCheckOutImgDialogComponent {
  constructor(@Inject(MD_DIALOG_DATA) public data: any) {
  }
}
