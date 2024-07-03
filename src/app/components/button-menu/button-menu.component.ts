import { Component } from '@angular/core';
import { GenericAlertButtonComponent } from '../generic-alert-button/generic-alert-button.component';

@Component({
  selector: 'app-button-menu',
  standalone: true,
  imports: [GenericAlertButtonComponent],
  templateUrl: './button-menu.component.html',
  styleUrl: './button-menu.component.css',
})
export class ButtonMenuComponent {
  buttons: any[] = [
    {
      buttonTitle: 'philippe',
      alertMessage: 'je sais ou tu te caches',
    },
    {
      buttonTitle: 'marco',
      alertMessage: 'polo',
    },
    {
      buttonTitle: 'bob',
      alertMessage: 'marley',
    },
  ];
}
