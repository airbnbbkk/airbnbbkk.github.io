import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nj-listing-info-location',
  styleUrls: ['listing-info-location.scss'],
  templateUrl: 'listing-info-location.html'
})
export class ListingInfoLocationComponent implements OnInit {
  public listingInfo: ListingInfo;
  public yt_voice_howToGo: any;

  constructor(private route: ActivatedRoute,
              private domSanitizer: DomSanitizer) {

  }

  public async ngOnInit() {
    this.listingInfo = this.route.snapshot.data['listingInfo'];

    this.yt_voice_howToGo = this.domSanitizer.bypassSecurityTrustResourceUrl(
      this.listingInfo.location.voiceGuide.howToGo.default.toString());

    console.log(this.listingInfo);
  }

}
