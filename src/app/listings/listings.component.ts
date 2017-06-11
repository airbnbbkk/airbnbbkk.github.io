import { Component, OnInit } from '@angular/core';
import { RepoService } from '../service/repo.service';
import { repoServiceFactory } from '../service/repo.service.provider';
import { ListingsService } from './listings.service';

@Component({
  selector: 'nj-listings',
  providers: [ListingsService,
    {
      provide: RepoService,
      useFactory: repoServiceFactory('listing')
    }],
  styleUrls: ['listings.component.scss'],
  templateUrl: 'listings.component.html'
})
export class ListingsComponent implements OnInit {

  public listings: Array<RepoDocResponse<Listing>>;

  constructor(private listingService: ListingsService) {
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
