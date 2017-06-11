import { ListingInfoDict } from './listing-info.const';

export class ListingInfoService {
  public getListingInfo(id: string) {

    try {
      const listingInfo = ListingInfoDict[id];
      return listingInfo;
    } catch (e) {
      throw new Error(`No listing data with the given id: ${id}`);
    }


  }
}
