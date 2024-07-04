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
  vue: boolean = true;

  changeValue(event: boolean) {
    this.vue = event;
  }
}
