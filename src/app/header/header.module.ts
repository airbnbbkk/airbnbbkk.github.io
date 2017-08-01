import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgCustomMaterialModule } from '../ng-material/ng-material.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    NgCustomMaterialModule,
    TranslateModule
  ],
  exports: [
    HeaderComponent
  ]
})

export class HeaderModule {

}
