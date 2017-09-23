import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts.component';
import { NgCustomMaterialModule } from '../ng-material/ng-material.module';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { TranslationModule } from '../service/translationModule.provider';

@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    NgCustomMaterialModule,
    TranslationModule,
    RouterModule.forChild([{
      path: '',
      component: ContactsComponent
    }])
  ]
})

export class ContactsModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    console.log('registering fonts');
    iconRegistry
      .addSvgIcon(
        'whats_app',
        sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/whatsapp-icon.svg'))
      .addSvgIcon(
        'line',
        sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/line-messenger.svg'))
      .addSvgIcon(
        'kakao',
        sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/kakaotalk.svg'))
      .addSvgIcon(
        'wechat',
        sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/wechat.svg'));
  }
}
