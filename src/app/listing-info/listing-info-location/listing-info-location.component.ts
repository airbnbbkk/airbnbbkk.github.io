import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TranslationModule } from '../../service/translationModule.provider';

@Component({
  selector: 'nj-listing-info-location',
  styleUrls: ['listing-info-location.scss'],
  templateUrl: 'listing-info-location.html'
})
export class ListingInfoLocationComponent implements OnInit {
  public listingInfo: ListingInfoLocation;
  public getHowToGoVideoUrl: () => SafeResourceUrl;
  public gmHouseLocation: SafeResourceUrl;

  constructor(private route: ActivatedRoute,
              private domSanitizer: DomSanitizer,
              private translate: TranslationModule) {

  }

  public async ngOnInit() {
    this.listingInfo = this.route.snapshot.data['listingInfo'].location;

    this.getHowToGoVideoUrl = () => this.domSanitizer.bypassSecurityTrustResourceUrl(
      this.listingInfo.voiceGuide.howToGo[this.translate.getCurrentLang()].toString());

    this.gmHouseLocation = this.domSanitizer.bypassSecurityTrustResourceUrl(
      this.listingInfo.gMap.toString());
  }

}
