import { Component, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'nj-log-in',
  providers: [],
  animations: [
    trigger('logInInputState', [
      state('inactive', style({
        height: '1rem'
      })),
      state('active', style({
        height: '*'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ],
  styleUrls: ['log-in.component.scss'],
  templateUrl: 'log-in.component.html'
})
export class LogInComponent {

  public logInInputState = 'inactive';

  public setLogInInputState(state: string) {
    this.logInInputState = state;
  }
}
