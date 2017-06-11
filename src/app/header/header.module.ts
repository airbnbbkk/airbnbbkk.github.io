import { NgModule } from '@angular/core';
import { NgCustomMaterialModule } from '../ng-material/ng-material.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    NgCustomMaterialModule
  ],
  exports: [
    HeaderComponent
  ]
})

export class HeaderModule {

}
