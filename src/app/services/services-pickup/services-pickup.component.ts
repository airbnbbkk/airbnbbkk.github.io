import { Component } from '@angular/core';
import { ServicesPickupInfo } from './services-pickup.const';
import { TranslationModule } from '../../service/translationModule.provider';

@Component({
  selector: 'nj-services-pickup',
  styleUrls: ['services-pickup.component.scss'],
  templateUrl: 'services-pickup.component.html'
})
export class ServicesPickupComponent {
  public pickupInfo: any;

  constructor(public translate: TranslationModule) {
    this.pickupInfo = ServicesPickupInfo;
  }
}
