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

  constructor(private translate: TranslateService) {
    this.currentLang = translate.getDefaultLang();

    this.onLangChageSubs = translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang = event.lang;
      this.translate.use(this.currentLang);
    });
  }

  public getCurrentLang() {
    return this.translate.currentLang || this.translate.getDefaultLang();
  }

  public getCurrentGoogleLang() {
    const lang = this.getCurrentLang();

    return lang === 'cn' ? 'zh-Hans' : lang;
  }

  public ngOnDestroy() {
    console.log('listing-info component destroyed');
    this.onLangChageSubs.unsubscribe();
  }
}
