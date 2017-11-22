import { NgModule } from '@angular/core';
import { NgCustomMaterialModule } from '../ng-material/ng-material.module';
import { HeaderComponent } from './header.component';
import { TranslationModule } from '../service/translationModule.provider';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    NgCustomMaterialModule,
    TranslationModule
  ],
  exports: [
    HeaderComponent
  ]
})

export class HeaderModule {

}
