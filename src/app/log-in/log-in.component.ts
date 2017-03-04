import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'nj-log-in',
  providers: [],
  animations: [
    trigger('logInInputState', [
      state('inactive', style({
        height: '1rem;'
      })),
      state('active', style({
        height: '2rem'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ],
  styleUrls: ['log-in.component.scss'],
  templateUrl: 'log-in.component.html'
})
export class LogInComponent implements OnInit {
  public logInInputState = 'inactive';

  public ngOnInit() {
  }

  public toggleLogInInput() {
    console.log('toggle!');
    this.logInInputState = 'active';
  }
}
