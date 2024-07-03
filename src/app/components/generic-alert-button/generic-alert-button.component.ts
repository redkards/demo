import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-alert-button',
  standalone: true,
  imports: [],
  templateUrl: './generic-alert-button.component.html',
  styleUrl: './generic-alert-button.component.css',
})
export class GenericAlertButtonComponent {
  @Input()
  buttonTitle!: string;

  @Input()
  alertMessage!: string;

  onClick() {
    alert(this.alertMessage);
  }
}
