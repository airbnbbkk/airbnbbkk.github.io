import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nj-main',
  providers: [],
  styleUrls: ['main.component.scss'],
  templateUrl: 'main.component.html'
})
export class MainComponent implements OnInit {
  public helloMain: string;

  public ngOnInit() {
    this.helloMain = 'Hello Main!!!!';
  }
}
