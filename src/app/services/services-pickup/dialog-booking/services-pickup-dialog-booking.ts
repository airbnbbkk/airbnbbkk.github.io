import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { TranslationModule } from '../../../service/translationModule.provider';
import { PICKUP_SPOTS } from '../services-pickup.const';
import { AirbnbApiService } from '../../../service/airbnb.api.service';
import { ServicesPickupDialogConfirmComponent } from '../dialog-confirm/services-pickup-dialog-confirm';
import * as moment from 'moment';

@Component({
  selector: 'services-pickup-dialog-booking',
  templateUrl: 'services-pickup-dialog-booking.html',
  styleUrls: ['services-pickup-dialog-booking.scss']
})
export class ServicesPickupDialogBookingComponent implements OnInit {
  public form: FormGroup;
  public airportForm: FormGroup;
  public houseForm: FormGroup;
  public pickupInfo: PickupServiceInfo;
  public selectedVehicle: PickupVehicle;
  public confirmCode: string;
  public departures: PickupSpot[];
  public destination: PickupSpot[];
  public PICKUP_SPOTS = PICKUP_SPOTS;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private airbnbApi: AirbnbApiService,
              private formBuilder: FormBuilder,
              public dialog: MatDialog,
              public translate: TranslationModule) {

    this.pickupInfo = Object.assign({}, data.pickupInfo);
    this.selectedVehicle = Object.assign({}, data.selectedVehicle);
    this.confirmCode = data.confirmCode;

    this.form = formBuilder.group({
      vehicle: null,
      bookingNumber: this.confirmCode,
      price: null,
      tripType: 'oneway',
      departure: null,
      destination: {
        value: null,
        disabled: false
      }
    });

    this.airportForm = formBuilder.group({
      time: null,
      date: null,
      name: null,
      flightName: null,
      flightNumber: null
    });

    this.houseForm = formBuilder.group({
      time: null,
      date: null
    });

    this.departures = this.destination = this.pickupInfo.spots.slice();

    this.form.valueChanges.subscribe(formData => {

    });
  }

  public ngOnInit() {
    this.form.get('vehicle').setValue(this.selectedVehicle.name[this.translate.getCurrentLang()]);
    this.form.get('price').setValue(this.getPickupPrice());
  }

  public changeSpotOptions() {
    const departureForm = this.form.get('departure');
    const destinationForm = this.form.get('destination');
    const tripTypeForm = this.form.get('tripType');

    console.log('change spot options', this.airportForm.enabled, this.houseForm.enabled);

    this.airportForm.enable();
    this.houseForm.enable();
    destinationForm.enable();
    departureForm.enable();

    this.departures = this.destination = this.pickupInfo.spots.slice();

    if (tripTypeForm.value === 'oneway') {
      if (departureForm.value === PICKUP_SPOTS.HOUSE) {
        this.airportForm.disable();
        destinationForm.setValue(null);
        this.destination = this.pickupInfo.spots.filter(spot => spot.type !== PICKUP_SPOTS.HOUSE);
      } else {
        this.houseForm.disable();
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

  public minutelyTimeMatcher(control: FormControl, form: FormGroupDirective | NgForm): boolean {
    return !(control.value >= 0 && control.value <= 59);
  }

  public async onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const message = this.generateMessage();
    this.validateAllFormFields(this.airportForm);
    this.validateAllFormFields(this.houseForm);

    if (this.airportForm.enabled && this.houseForm.enabled) {
      if (this.airportForm.valid && this.houseForm.valid) {
        console.log('submitting form', message);
      }
    } else if (this.houseForm.enabled) {
      if (this.houseForm.valid) {
        console.log('submitting form', message);
      }
    } else if (this.airportForm.enabled) {
      if (this.airportForm.valid) {
        console.log('submitting form', message);
      }
    }

    this.openConfirmDialog(message);

    //this.openConfirmDialog(message);
    /*const res = await this.airbnbApi.sendMessage(276569855, message);

    res.subscribe(r => {
      console.log('response', r);
    });*/
  }

  public openConfirmDialog(message: string) {
    this.dialog.open(ServicesPickupDialogConfirmComponent, {
      panelClass: 'nj-confirm-dialog',
      height: '90%',
      data: {
        bookingNumber: this.form.get('bookingNumber').value,
        message
      }
    });
  }

  private generateMessage() {
    const title = `Pickup Service Request - ${this.form.get('tripType').value}\n\n`;
    const price = `Total Price: ${this.getPickupPrice()}\n\n`;
    let fromAirport = '';
    let fromHouse = ``;

    if (this.airportForm.enabled) {
      fromAirport = `[Airport to House]\n\n`
        + `booking number: ${this.form.get('bookingNumber').value}\n`
        + `vehicle: ${this.form.get('vehicle').value}\n`
        + `airport: ${PICKUP_SPOTS[this.form.get('departure').value]}\n`
        + `date & time: ${this.convertToReadableDate(this.airportForm.get('date').value)} ${this.airportForm.get('time').value}\n`
        + `flight: ${this.airportForm.get('flightName').value} ${this.airportForm.get('flightNumber').value}\n`
        + `name card: ${this.airportForm.get('name').value}\n\n`
    }

    if (this.houseForm.enabled) {
      fromHouse = `[House to Airport]\n\n`
        + `date & time: ${this.convertToReadableDate(this.houseForm.get('date').value)} ${this.houseForm.get('time').value}\n\n`
    }

    return title + fromAirport + fromHouse + price;

  }

  private fixDestinationToHouse() {
    const destinationForm = this.form.get('destination');

    this.destination = this.pickupInfo.spots.filter(spot => spot.type === PICKUP_SPOTS.HOUSE);
    destinationForm.setValue(PICKUP_SPOTS.HOUSE);
    destinationForm.disable();
  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  private convertToReadableDate(date: Date): string {
    return moment(date).format('YYYY MMM DD dddd');
  }
}
