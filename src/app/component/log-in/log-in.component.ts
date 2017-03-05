import { Component, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'nj-log-in',
  providers: [],
  animations: [
    trigger('logInInputState', [
      state('inactive', style({
        height: '20px'
      })),
      state('active', style({
        height: '100%'
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))
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
