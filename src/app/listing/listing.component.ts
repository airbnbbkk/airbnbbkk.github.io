import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nj-listing',
  providers: [],
  styleUrls: ['listing.component.scss'],
  templateUrl: 'listing.component.html'
})
export class ListingComponent implements OnInit {
  public helloMain: string;

  public ngOnInit() {
    this.helloMain = 'Hello Main!!!!';
  }
}
