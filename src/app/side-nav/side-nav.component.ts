import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nj-side-nav',
  styleUrls: ['side-nav.component.scss'],
  templateUrl: 'side-nav.component.html'
})
export class SideNavComponent implements OnInit {
  @Input() public sidenav;

  public ngOnInit() {
    /* empty */
  }
}
