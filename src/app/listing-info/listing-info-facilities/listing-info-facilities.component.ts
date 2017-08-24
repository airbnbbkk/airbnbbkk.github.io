import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslationModule } from '../../service/translationModule.provider';

@Component({
  selector: 'nj-listing-info-facilities',
  styleUrls: ['listing-info-facilities.scss'],
  templateUrl: 'listing-info-facilities.html'
})
export class ListingInfoFacilitiesComponent implements OnInit {

  public facilities: ListingInfoFacilities;

  constructor(private route: ActivatedRoute,
              public translate: TranslationModule) {

  }

  public ngOnInit() {
    this.facilities = this.route.snapshot.data['listingInfo'].facilities;
  }
}
