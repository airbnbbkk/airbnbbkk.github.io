import { Component } from '@angular/core';
import { Rules } from './listing-info-rules.const';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'nj-listing-info-house-rules',
  styleUrls: ['listing-info-house-rules.scss'],
  templateUrl: 'listing-info-house-rules.html'
})
export class ListingInfoHouseRulesComponent {
  public rules: string[];

  constructor(private translate: TranslateService) {

  }

  public getRulesData() {
    return Rules[this.translate.currentLang || this.translate.defaultLang];
  }
}
