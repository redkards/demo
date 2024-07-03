import { Component } from '@angular/core';
import { ComposantEnfantComponent } from '../composant-enfant/composant-enfant.component';

@Component({
  selector: 'app-composant-parent',
  standalone: true,
  imports: [ComposantEnfantComponent],
  templateUrl: './composant-parent.component.html',
  styleUrl: './composant-parent.component.css',
})
export class ComposantParentComponent {
  visible: boolean = true;

  changeValue(event: boolean) {
    this.visible = event;
  }
}
