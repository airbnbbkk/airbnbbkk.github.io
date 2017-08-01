import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'nj-listing-info-facilities',
  styleUrls: ['listing-info-facilities.scss'],
  templateUrl: 'listing-info-facilities.html'
})
export class ListingInfoFacilitiesComponent implements OnInit {

  public facilities: ListingInfoFacilities;

  constructor(private route: ActivatedRoute,
              public translate: TranslateService) {

  }

  public ngOnInit() {
    this.facilities = this.route.snapshot.data['listingInfo'].facilities;
  }
}
