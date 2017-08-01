import { NgModule, OnDestroy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subject } from 'rxjs/Subject';

@NgModule({
  imports: [
    TranslateModule.forChild()
  ],
  exports: [TranslateModule]
})
export class TranslationModule implements OnDestroy {
  public currentLang: string;

  private onLangChageSubs: Subject<any>;

  constructor(translate: TranslateService) {
    this.currentLang = translate.getDefaultLang();

    this.onLangChageSubs = translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang = event.lang;
      console.log('change lang', this.currentLang);
      translate.use(this.currentLang);
    });
  }

  public ngOnDestroy() {
    console.log('listing-info component destroyed');
    this.onLangChageSubs.unsubscribe();
  }
}
