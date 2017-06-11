import { NgModule } from '@angular/core';
import { MdCardModule, MdListModule, MdSidenavModule, MdTabsModule } from '@angular/material';

@NgModule({
  exports: [
    MdSidenavModule,
    MdCardModule,
    MdListModule,
    MdTabsModule
  ]
})

export class NgCustomMaterialModule {
}
