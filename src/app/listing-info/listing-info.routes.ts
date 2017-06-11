import { ListingInfoComponent } from './listing-info.component';
import { ListingInfoResolve } from './listing-info.resolve';
export const routes = [
  {
    path: ':id',
    component: ListingInfoComponent,
    children: [
      {
        path: 'location',
        loadChildren: './listing-info-location/listing-info-location.module#ListingInfoLocationModule',
        resolve: {
          listingInfo: ListingInfoResolve
        }
      },
      {
        path: 'check-in',
        loadChildren: './listing-info-check-in/listing-info-check-in.module#ListingInfoCheckInModule',
        resolve: {
          listingInfo: ListingInfoResolve
        }
      },
      {
        path: 'house-rules',
        loadChildren: './listing-info-house-rules/listing-info-house-rules.module#ListingInfoHouseRulesModule',
        resolve: {
          listingInfo: ListingInfoResolve
        }
      }
    ]
  }
];
