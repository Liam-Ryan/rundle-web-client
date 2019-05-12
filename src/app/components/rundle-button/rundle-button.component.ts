import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rundle-button',
  templateUrl: './rundle-button.component.html',
  styleUrls: ['./rundle-button.component.scss']
})
export class RundleButtonComponent {

  @Input() rippleColor = '#FFFFFF';
  @Input() rippleCentered = true;
  @Input() rippleRadius = 40;
  @Input() routerLink: string;
  @Input() link: string;
  @Input() displayValue: string;

  constructor() {
  }

}
