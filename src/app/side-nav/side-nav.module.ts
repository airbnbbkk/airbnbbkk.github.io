import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgCustomMaterialModule } from '../ng-material/ng-material.module';
import { SideNavComponent } from './side-nav.component';
import { TranslationModule } from '../service/translationModule.provider';

@NgModule({
  declarations: [
    SideNavComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    TranslationModule,
    NgCustomMaterialModule
  ],
  exports: [
    SideNavComponent
  ]
})

export class SideNavModule {

}
