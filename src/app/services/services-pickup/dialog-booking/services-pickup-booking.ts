import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { TranslationModule } from '../../../service/translationModule.provider';
import { PICKUP_SPOTS } from '../services-pickup.const';

@Component({
  selector: 'services-pickup-booking-dialog',
  templateUrl: 'services-pickup-booking.html',
  styleUrls: ['services-pickup-booking.scss']
})
export class ServicesPickupBookingDialogComponent {
  public form: FormGroup;
  public pickupInfo: PickupServiceInfo;
  public selectedVehicle: PickupVehicle;
  public departures: PickupSpot[];
  public destination: PickupSpot[];
  public PICKUP_SPOTS = PICKUP_SPOTS;

  constructor(@Inject(MD_DIALOG_DATA) public data: any,
              private formBuilder: FormBuilder,
              public translate: TranslationModule) {

    this.pickupInfo = Object.assign({}, data.pickupInfo);
    this.selectedVehicle = Object.assign({}, data.selectedVehicle);

    this.form = formBuilder.group({
      time: null,
      price: null,
      name: null,
      flightName: null,
      flightNumber: null,
      tripType: 'oneway',
      departure: null,
      destination: {
        value: null,
        disabled: false
      }
    });

    this.departures = this.destination = this.pickupInfo.spots.slice();

    this.form.valueChanges.subscribe(formData => {

    });
  }

  public changeSpotOptions() {
    console.log('change spot options');
    const departureForm = this.form.get('departure');
    const destinationForm = this.form.get('destination');
    const tripTypeForm = this.form.get('tripType');

    destinationForm.enable();
    departureForm.enable();

    this.departures = this.destination = this.pickupInfo.spots.slice();

    if (tripTypeForm.value === 'oneway') {
      if (departureForm.value === PICKUP_SPOTS.HOUSE) {
        destinationForm.setValue(null);
        this.destination = this.pickupInfo.spots.filter(spot => spot.type !== PICKUP_SPOTS.HOUSE);
      } else {
        this.fixDestinationToHouse();
      }
    } else {
      this.departures = this.pickupInfo.spots.filter(spot => spot.type !== PICKUP_SPOTS.HOUSE);
      if (departureForm.value === PICKUP_SPOTS.HOUSE) {
        departureForm.setValue(null);
      }
      this.fixDestinationToHouse();
    }
  }

  public getPickupPrice() {
    const tripType = this.form.get('tripType').value;
    const multiplier = tripType === 'oneway' ? 1 : 2;
    return multiplier * this.selectedVehicle.price;
  }

  public hourlyTimeMatcher(control: FormControl, form: FormGroupDirective | NgForm): boolean {
    return !(control.value >= 0 && control.value <= 24);
  }

  private fixDestinationToHouse() {
    const destinationForm = this.form.get('destination');

    this.destination = this.pickupInfo.spots.filter(spot => spot.type === PICKUP_SPOTS.HOUSE);
    destinationForm.setValue(PICKUP_SPOTS.HOUSE);
    destinationForm.disable();
  }
}
