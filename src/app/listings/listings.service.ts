import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { AirbnbApiService } from '../service/airbnb.api.service';
import { RepoService } from '../service/repo.service';

@Injectable()
export class ListingsService {
  constructor(
    private apiService: AirbnbApiService,
    private repoService: RepoService
  ) {
  }

  public getListing(): Observable<Array<RepoDocResponse<Listing>>> {
    return this.getAllListings()
               .catch((err: any) => {
                 if (err.name === 'not_found') {
                   const listingArray = this.fetchListing();
                   const listingDocArray = this.transformToListingDocArray(listingArray);

                   return listingDocArray
                     .merge()
                     .mergeMap(listings =>
                       this.saveAllListingToRepo(listings)
                           .mergeMapTo(this.getAllListings()));
                 } else {
                   console.log('error getListing', err);
                 }
               });
  }

  private saveAllListingToRepo(listingDocs: Array<Listing&RepoDoc>) {
    console.log('listingDoc', listingDocs);
    return Observable.fromPromise(this.repoService.saveAll(listingDocs));
  }

  private fetchListing() {
    return this.apiService.getListing()
               .mergeMap(res => {
                 return res['listings'];
               });
  }

  private transformToListingDocArray(listings: Observable<Listing&RepoDoc[]>) {
    return listings
      .map((listing: any) => this.getMappedListingData(listing))
      .map((listing: Listing) => this.createListingDoc(listing))
      .toArray();
  }

  private createListingDoc(listing: Listing) {
    const timestamp = new Date().getTime();

    const repoDoc: RepoDoc = {
      _id: 'listing',
      updatedAt: timestamp,
      createdAt: timestamp
    };

    return Object.assign(repoDoc, listing) as Listing&RepoDoc;
  }

  private getMappedListingData(data: {[key: string]: any}) {
    let listing: Listing = {
      _id: null,
      name: null,
      summary: null,
      photos: {
        large_url: [],
        small_encoded: [],
        thumbnail_encoded: []
      },
      bedrooms: null
    };

    listing._id = data['id'].toString();
    listing.name = data['name'];
    listing.summary = data['summary'];
    listing.photos.large_url = data['xl_picture_urls'];
    listing.bedrooms = data['bedrooms'];

    return listing;
  }

  private getAllListings(): Observable<Array<RepoDocResponse<Listing>>> {
    console.log('get all listings');
    return Observable.fromPromise(this.repoService.list());
  }
}
