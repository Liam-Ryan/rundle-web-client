import { Component, Input } from '@angular/core';
import { RundleButtonComponent } from '../rundle-button/rundle-button.component';

@Component({
  selector: 'app-rundle-icon-button-fa',
  templateUrl: './rundle-icon-button-fa.component.html',
  styleUrls: ['./rundle-icon-button-fa.component.scss']
})
export class RundleIconButtonFaComponent extends RundleButtonComponent {
  @Input() faIconClass: string;

  constructor() {
    super();
  }

}
