import { ListingInfoComponent } from './listing-info.component';
import { ListingInfoResolve } from './listing-info.resolve';

export const routes = [
  {
    path: ':id',
    component: ListingInfoComponent,
    // canActivate: [TranslateRouteService],
    children: [
      {path: '', redirectTo: 'checkin', pathMatch: 'full'},
      {
        path: 'checkin',
        loadChildren: './listing-info-check-in/listing-info-check-in.module#ListingInfoCheckInModule',
        resolve: {
          listingInfo: ListingInfoResolve
        }
      },
      {
        path: 'location',
        loadChildren: './listing-info-location/listing-info-location.module#ListingInfoLocationModule',
        resolve: {
          listingInfo: ListingInfoResolve
        }
      },
      {
        path: 'rules',
        loadChildren: './listing-info-house-rules/listing-info-house-rules.module#ListingInfoHouseRulesModule',
        resolve: {
          listingInfo: ListingInfoResolve
        }
      },
      {
        path: 'facilities',
        loadChildren: './listing-info-facilities/listing-info-facilities.module#ListingInfoFacilitiesModule',
        resolve: {
          listingInfo: ListingInfoResolve
        }
      }
    ]
  }
];
