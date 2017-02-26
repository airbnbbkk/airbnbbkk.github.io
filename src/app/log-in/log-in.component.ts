import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nj-log-in',
  providers: [],
  styleUrls: ['log-in.component.scss'],
  templateUrl: 'log-in.component.html'
})
export class LogInComponent implements OnInit {
  public helloMain: string;

  public ngOnInit() {
    this.helloMain = 'Hello Main!!!!';
  }
}
