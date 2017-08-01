import { Component, OnInit } from '@angular/core';
import { RepoService } from '../service/repo.service';
import { ListingsService } from './listings.service';
import { ListingsRepoService } from './listings-repo.service';

@Component({
  selector: 'nj-listings',
  providers: [
    ListingsService,
    {
      provide: RepoService,
      useFactory: ListingsRepoService
    }],
  styleUrls: ['listings.component.scss'],
  templateUrl: 'listings.component.html'
})
export class ListingsComponent implements OnInit {

  public listings: Array<RepoDocResponse<Listing>>;

  constructor(private listingService: ListingsService) {
  }

  public async ngOnInit() {
    await this.getListing(false);
  }

  public async getListing(forceFetch = false) {
    await this.listingService.getListing(forceFetch).catch(res => {
      console.log('err res', res);
      return res;
    }).subscribe((res: Array<RepoDocResponse<Listing>>) => {
      console.log('res', res);
      this.listings = res;
    });
  }
}
