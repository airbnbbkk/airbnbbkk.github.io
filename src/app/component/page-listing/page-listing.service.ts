import { Injectable } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Injectable()
export class PageListingService {
  constructor(
    private apiService: ApiService
  ) {
  }

  public getListing() {
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
    let listing: Listing = {
      name: null,
      summary: null,
      photos: {
        large_url: [],
        small_encoded: [],
        thumbnail_encoded: []
      },
      bedrooms: null
    };

    listing.name = data['name'];
    listing.summary = data['summary'];
    listing.photos.large_url = data['xl_picture_urls'];
    listing.bedrooms = data['bedrooms'];

    return listing;
  }
}
