import { Component, OnInit } from '@angular/core';
import './main.component.scss';

@Component({
  selector: 'nj-main',
  providers: [],
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  public helloMain: string;

  public ngOnInit() {
    this.helloMain = 'Hello Main!!!!';
  }
}
