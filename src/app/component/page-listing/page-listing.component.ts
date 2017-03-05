import { Component, OnInit } from '@angular/core';
import { PageListingService } from './page-listing.service';

@Component({
  selector: 'nj-page-listing',
  providers: [PageListingService],
  styleUrls: ['page-listing.component.scss'],
  templateUrl: 'page-listing.component.html'
})
export class PageListingComponent implements OnInit {

  public listings: Listing[];

  constructor(
    private listingService: PageListingService
  ) {
  }

  public ngOnInit() {
    this.listings = this.listingService.getListing();
  }
}
