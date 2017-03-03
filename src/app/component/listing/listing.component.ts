import { Component, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'nj-listing',
  providers: [],
  styleUrls: ['listing.component.scss'],
  templateUrl: 'listing.component.html'
})
export class ListingComponent implements AfterViewInit {

  @Input() listing: Listing;

  constructor() {}

  public AfterViewInit() {
    console.log('listing', this.listing);
  }
}
