import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';
import { routes } from './services.routes';
import { NgCustomMaterialModule } from '../ng-material/ng-material.module';
import { TranslationModule } from '../service/translationModule.provider';

@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    NgCustomMaterialModule,
    TranslationModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ServicesComponent
  ]
})

export class ServicesModule {

}
