import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MdDialog } from '@angular/material';
import { ListingInfoCheckOutImgDialogComponent } from './listing-info-check-out-img.component';

@Component({
  selector: 'nj-listing-info-check-in',
  styleUrls: ['listing-info-check-in.scss'],
  templateUrl: 'listing-info-check-in.html'
})
export class ListingInfoCheckInComponent implements OnInit {

  public listingInfo: ListingInfoCheckIn;
  public YT_VIDEO_CHECK_IN: any;

  constructor(private route: ActivatedRoute,
              private domSanitizer: DomSanitizer,
              public dialog: MdDialog) {

  }

  public openDialog() {
    this.dialog.open(ListingInfoCheckOutImgDialogComponent, {
      data: {
        keyCard: this.listingInfo.leaveKeycard
      }
    });
  }

  public ngOnInit() {
    this.listingInfo = this.route.snapshot.data['listingInfo'].checkIn;

    this.YT_VIDEO_CHECK_IN = this.domSanitizer.bypassSecurityTrustResourceUrl(
      this.listingInfo.video.howToGo.default.toString());
  }
}
