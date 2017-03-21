import { Component } from '@angular/core';

@Component({
  selector: 'page-instruction',
  styleUrls: ['page-instruction.component.scss'],
  templateUrl: 'page-instruction.component.html'
})
export class PageInstructionComponent {
  public instructions = require('./instruction.json');
}
