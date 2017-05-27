import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core/directives";

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
