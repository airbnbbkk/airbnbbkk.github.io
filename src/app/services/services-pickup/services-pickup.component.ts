import { Component } from '@angular/core';
import { ServicesPickupInfo } from './services-pickup.const';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'nj-services-pickup',
  styleUrls: ['services-pickup.component.scss'],
  templateUrl: 'services-pickup.component.html'
})
export class ServicesPickupComponent {
  public pickupInfo: any;

  constructor(public translate: TranslateService) {
    this.pickupInfo = ServicesPickupInfo;
  }
}
