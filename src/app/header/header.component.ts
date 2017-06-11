import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nj-header',
  providers: [],
  styleUrls: ['header.component.scss'],
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() public sidenav;

  public ngOnInit() {
    /* empty */
  }
}
