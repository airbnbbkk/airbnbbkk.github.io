import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ServicesComponent } from './services.component';
import { routes } from './services.routes';
import { NgCustomMaterialModule } from '../ng-material/ng-material.module';

@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    NgCustomMaterialModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ServicesComponent
  ]
})

export class ServicesModule {

}
