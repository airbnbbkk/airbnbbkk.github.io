import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nj-page-listing',
  providers: [],
  styleUrls: ['page-listing.component.scss'],
  templateUrl: 'page-listing.component.html'
})
export class PageListingComponent implements OnInit {
  public helloMain: string;

  public ngOnInit() {
    this.helloMain = 'Hello Main!!!!';
  }
}
