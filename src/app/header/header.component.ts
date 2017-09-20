import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'nj-header',
  styleUrls: ['header.component.scss'],
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() public sidenav;

  constructor(private translate: TranslateService) {

  }

  public ngOnInit() {
    /* empty */
  }

  public changeLang(lang: string) {
    this.translate.use(lang);
  }
}
