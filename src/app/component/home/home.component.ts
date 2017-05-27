import {Component, OnInit} from "@angular/core";
import {GoogleApiService} from "../../service/google.api.service";
@Component({
  selector: 'home',
  styleUrls: ['home.component.scss'],
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(
    private googleApiService: GoogleApiService
  ) {

  }

  public async ngOnInit() {
  }
}
