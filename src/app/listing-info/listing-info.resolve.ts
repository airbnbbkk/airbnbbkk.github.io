import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ListingInfoService } from './listing-info.service';

@Injectable()
export class ListingInfoResolve implements Resolve<ListingInfo> {

  constructor(private listingInfoService: ListingInfoService) {
  }

  public resolve(route: ActivatedRouteSnapshot) {
    return this.listingInfoService.getListingInfo(route.parent.paramMap.get('id'));
  }
}
