import { NgModule } from '@angular/core';
import { NgCustomMaterialModule } from '../ng-material/ng-material.module';
import { SideNavComponent } from './side-nav.component';

@NgModule({
  declarations: [
    SideNavComponent
  ],
  imports: [
    NgCustomMaterialModule
  ],
  exports: [
    SideNavComponent
  ]
})

export class SideNavModule {

}
