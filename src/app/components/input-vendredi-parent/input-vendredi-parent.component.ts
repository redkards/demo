import { Component } from '@angular/core';
import { ExoInputVendrediComponent } from '../exo-input-vendredi/exo-input-vendredi.component';

@Component({
  selector: 'app-input-vendredi-parent',
  standalone: true,
  imports: [ExoInputVendrediComponent],
  templateUrl: './input-vendredi-parent.component.html',
  styleUrl: './input-vendredi-parent.component.css',
})
export class InputVendrediParentComponent {
  title?: string;

  hello: string = 'bonjour';

  test: boolean = false;

  // changeValue(event: string) {
  //   this.hello = 'changement';
  //   console.log(this.test);
  // }

  changeTest(clickEvent: boolean) {
    if (clickEvent) {
      this.hello = 'salut';
    } else {
      this.hello = 'bonjour';
    }
  }
}
