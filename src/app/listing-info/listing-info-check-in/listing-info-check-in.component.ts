import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ListingInfoCheckOutImgDialogComponent } from './listing-info-check-out-img.component';
import { TranslationModule } from '../../service/translationModule.provider';

@Component({
  selector: 'nj-listing-info-check-in',
  styleUrls: ['listing-info-check-in.scss'],
  templateUrl: 'listing-info-check-in.html'
})
export class ListingInfoCheckInComponent implements OnInit {

  public listingInfo: ListingInfoCheckIn;
  public listingOrder: number;

  constructor(private route: ActivatedRoute,
              private domSanitizer: DomSanitizer,
              private translate: TranslationModule,
              public dialog: MatDialog) {

  }

  public ngOnInit() {
    this.listingInfo = this.route.snapshot.data['listingInfo'].checkIn;
    this.listingOrder = this.route.snapshot.data['listingInfo'].order;
  }

  public openDialog() {
    this.dialog.open(ListingInfoCheckOutImgDialogComponent, {
      data: {
        keyCard: this.listingInfo.leaveKeycard
      }
    });
  }

  public getCheckInVideoUrl() {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(
      this.listingInfo.video.howToGo[this.translate.getCurrentLang()].concat('&cc_lang_pref=' + this.translate.getCurrentGoogleLang()).toString());
  }

  public isAspire() {
    return this.listingOrder >= 4 && this.listingOrder <= 7;
  }
}
