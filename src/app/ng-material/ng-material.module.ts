import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
  MdListModule,
  MdSidenavModule,
  MdTabsModule
} from '@angular/material';

@NgModule({
  exports: [
    MdButtonModule,
    MdSidenavModule,
    MdCardModule,
    MdListModule,
    MdTabsModule
  ]
})

export class NgCustomMaterialModule {
}
