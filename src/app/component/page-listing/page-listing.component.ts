import { Component, OnInit } from '@angular/core';
import { PageListingService } from './page-listing.service';
import { repoServiceFactory } from '../../service/repo.service.provider';
import { RepoService } from '../../service/repo.service';
import { Observable } from '../../../../node_modules/rxjs/Observable';

@Component({
  selector: 'nj-page-listing',
  providers: [PageListingService,
    {
      provide: RepoService,
      useFactory: repoServiceFactory('listing'),
    }],
  styleUrls: ['page-listing.component.scss'],
  templateUrl: 'page-listing.component.html'
})
export class PageListingComponent implements OnInit {

  public listings: Observable<Listing[]>;

  constructor(
    private listingService: PageListingService
  ) {
  }

  public async ngOnInit() {
    this.listings = this.listingService.getListing();

    this.listings.subscribe(res => {
      console.log('res', res);
    });
  }
}
