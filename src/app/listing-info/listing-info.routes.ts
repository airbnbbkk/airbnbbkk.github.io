import { ListingInfoCheckInComponent } from './listing-info-check-in/listing-info-check-in.component';
import { ListingInfoHouseRulesComponent } from './listing-info-house-rules/listing-info-house-rules.component';
import { ListingInfoLocationComponent } from './listing-info-location/listing-info-location.component';
import { ListingInfoComponent } from './listing-info.component';
import { ListingInfoResolve } from './listing-info.resolve';
export const routes = [
  {
    path: ':id',
    component: ListingInfoComponent,
    children: [
      {
        path: 'location',
        component: ListingInfoLocationComponent,
        resolve: {
          listingInfo: ListingInfoResolve
        }
      },
      {
        path: 'check-in',
        component: ListingInfoCheckInComponent,
        resolve: {
          listingInfo: ListingInfoResolve
        }
      },
      {
        path: 'house-rules',
        component: ListingInfoHouseRulesComponent,
        resolve: {
          listingInfo: ListingInfoResolve
        }
      }
    ]
  }
];
