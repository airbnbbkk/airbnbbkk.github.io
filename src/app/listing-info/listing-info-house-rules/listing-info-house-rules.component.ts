import { Component } from '@angular/core';
import { Rules } from './listing-info-rules.const';
import { TranslationModule } from '../../service/translationModule.provider';

@Component({
  selector: 'nj-listing-info-house-rules',
  styleUrls: ['listing-info-house-rules.scss'],
  templateUrl: 'listing-info-house-rules.html'
})
export class ListingInfoHouseRulesComponent {
  public rules: string[];

  constructor(private translate: TranslationModule) {

  }

  public getRulesData() {
    return Rules[this.translate.getCurrentLang()];
  }
}
