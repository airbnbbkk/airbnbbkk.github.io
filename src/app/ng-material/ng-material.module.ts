import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdListModule,
  MdSidenavModule,
  MdTabsModule,
  MdIconModule,
  MdMenuModule,
  MdDialogModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  exports: [
    MdButtonModule,
    MdButtonToggleModule,
    MdSidenavModule,
    MdCardModule,
    MdListModule,
    MdTabsModule,
    MdIconModule,
    MdMenuModule,
    MdDialogModule,
    MdToolbarModule
  ]
})

export class NgCustomMaterialModule {
}
