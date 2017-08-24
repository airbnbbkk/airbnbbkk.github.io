import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nj-listing-info-location',
  styleUrls: ['listing-info-location.scss'],
  templateUrl: 'listing-info-location.html'
})
export class ListingInfoLocationComponent implements OnInit {
  public listingInfo: ListingInfo;
  public ytVoiceHowToGo: SafeResourceUrl;
  public gmHouseLocation: SafeResourceUrl;

  constructor(private route: ActivatedRoute,
              private domSanitizer: DomSanitizer) {

  }

  public async ngOnInit() {
    this.listingInfo = this.route.snapshot.data['listingInfo'];

    this.ytVoiceHowToGo = this.domSanitizer.bypassSecurityTrustResourceUrl(
      this.listingInfo.location.voiceGuide.howToGo.default.toString());

    this.gmHouseLocation = this.domSanitizer.bypassSecurityTrustResourceUrl(
      this.listingInfo.location.gMap.toString());
  }

}
