import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'listing-info',
  styleUrls: ['listing-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'listing-info.component.html'
})
export class ListingInfoComponent implements OnInit {
  public listingInfo: ListingInfo;

  constructor(private route: ActivatedRoute) {
  }

  public async ngOnInit() {
    this.listingInfo = this.route.snapshot.data['listingInfo'];
    console.log('listingINfo', this.listingInfo);
  }

}
