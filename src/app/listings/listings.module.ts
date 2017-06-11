import { CommonModule } from '@angular/common';
import { NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListingModule } from './listing/listing.module';
import { ListingsComponent } from './listings.component';

@NgModule({
  declarations: [
    ListingsComponent
  ],
  imports: [
    CommonModule,
    ListingModule,
    RouterModule.forChild([{
      path: '',
      component: ListingsComponent
    }])
  ],
  exports: [
    ListingsComponent
  ]
})

export class ListingsModule implements OnInit {
  public ngOnInit() {
    console.log('listings loaded');
  }
}
