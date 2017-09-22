import { Component, ViewChild } from '@angular/core';
import { Rules } from './listing-info-rules.const';
import { TranslationModule } from '../../service/translationModule.provider';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'nj-listing-info-house-rules',
  styleUrls: ['listing-info-house-rules.scss'],
  templateUrl: 'listing-info-house-rules.html'
})
export class ListingInfoHouseRulesComponent {
  @ViewChild('rla1') public rla1: RouterLinkActive;
  public rules: string[];

  constructor(private translate: TranslationModule) {
  }

  public getRulesData() {
    return Rules[this.translate.getCurrentLang()];
  }
}
