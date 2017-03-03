import { Injectable } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Injectable()
export class PageListingService {
  constructor(
    private apiService: ApiService
  ) {}

  public getListing() {
    console.log('get listing...');
    let listings: Listing[] = [];

    this.apiService.getListing().subscribe((listingData: any) => {
      console.log('listingData', listingData);
      listingData['listings'].forEach((listing: any) => {
        listings.push(this.getParseListingData(listing));
      });
    });

    return listings;
  }

  private getParseListingData(data: {[key: string]: any}) {
    let listing = {
      name: null,
      summary: null,
      photos: {
        large_url: null
      }
    } as Listing;

    listing.name = data['name'];
    listing.summary = data['summary'];
    listing.photos.large_url = data['xl_picture_urls'];

    return listing;
  }
}
