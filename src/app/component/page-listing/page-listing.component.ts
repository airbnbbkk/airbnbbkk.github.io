import { Component, OnInit } from '@angular/core';
import { PageListingService } from './page-listing.service';
import { repoServiceFactory } from '../../service/repo.service.provider';
import { RepoService } from '../../service/repo.service';

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

  public listings: Array<RepoDocResponse<Listing>>;

  constructor(
    private listingService: PageListingService
  ) {
  }

  public async ngOnInit() {
    this.listingService.getListing().catch(res => {
      console.log('err res', res);
      return res;
    }).subscribe((res: Array<RepoDocResponse<Listing>>) => {
      console.log('res', res);
      this.listings = res;
    });
  }
}
