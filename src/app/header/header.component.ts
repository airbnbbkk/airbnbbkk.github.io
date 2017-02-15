import { Component, OnInit, Input } from '@angular/core';
import './header.component.scss';

@Component({
  selector: 'nj-header',
  providers: [],
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() public sidenav;

  public ngOnInit() {
  }
}
