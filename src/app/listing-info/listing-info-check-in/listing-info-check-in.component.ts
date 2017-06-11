import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nj-listing-info-check-in',
  styleUrls: ['listing-info-check-in.scss'],
  templateUrl: 'listing-info-check-in.html'
})
export class ListingInfoCheckInComponent implements OnInit {

  public listingInfo: ListingInfo;
  public yt_voice_howToGo: any;

  constructor(private route: ActivatedRoute,
              private domSanitizer: DomSanitizer) {

  }

  public async ngOnInit() {
    this.listingInfo = this.route.snapshot.data['listingInfo'];

    this.yt_voice_howToGo = this.domSanitizer.bypassSecurityTrustResourceUrl(
      this.listingInfo.checkIn.video.howToGo.default.toString());
  }
}
