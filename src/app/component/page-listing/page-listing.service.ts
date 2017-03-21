import { Injectable } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { RepoService } from '../../service/repo.service';
import { Observable } from '../../../../node_modules/rxjs/Observable';

@Injectable()
export class PageListingService {
  constructor(
    private apiService: ApiService,
    private repoService: RepoService
  ) {
  }

  public getListing(): Observable<Listing[]> {
    return Observable.fromPromise(this.repoService.list())
                     .catch((err: any) => {
                       console.log(err);
                       if (err.name === 'not_found') {
                         const listingArray = this.fetchListing();
                         const listingDocArray = this.transformToListingDocArray(listingArray);

                         return listingDocArray
                           .switchMap(listings =>
                             Observable.fromPromise(this.saveAllListingToRepo(listings)))
                           .catch(error => {
                             console.log('failed to save listings to repo', error);
                             return null;
                           })
                           .switchMapTo(Observable.fromPromise(this.repoService.get('listing')));
                       }
                     });
  }

  private saveAllListingToRepo(listingDocs: Array<Listing&RepoDoc>) {
    console.log('listingDoc', listingDocs);
    return this.repoService.saveAll(listingDocs);
  }

  private fetchListing() {
    return this.apiService.getListing()
               .switchMap(res => {
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
}
