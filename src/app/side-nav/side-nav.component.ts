import { Component, OnInit } from '@angular/core';
import './side-nav.component.scss';

@Component({
  selector: 'nj-side-nav',
  providers: [],
  styleUrls: ['./side-nav.component.scss'],
  templateUrl: './side-nav.component.html'
})
export class SideNavComponent implements OnInit {
  public helloMain: string;

  public ngOnInit() {
  }
}
