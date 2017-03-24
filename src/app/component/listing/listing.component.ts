import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nj-listing',
  providers: [],
  styleUrls: ['listing.component.scss'],
  templateUrl: 'listing.component.html'
})
export class ListingComponent implements OnInit {

  @Input() public listing: Listing;
  @Input() public index: number;

  public ngOnInit() {
    console.log('listing', this.listing);
    this.index++;
  }
}
