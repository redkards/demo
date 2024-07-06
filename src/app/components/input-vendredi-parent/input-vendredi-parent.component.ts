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
  hello2: string = 'hello world';

  textButton: string = '';
  textButton1: string = '';
  textButton2: string = '';

  test: boolean = false;

  // changeValue(event: string) {
  //   this.hello = 'changement';
  //   console.log(this.test);
  // }

  changeTest(clickEvent: boolean) {
    if (clickEvent) {
      this.hello = 'salut';
      this.hello2 = 'john';
      this.textButton = 'appuyer';
      this.textButton1 = 'cliquer';
      this.textButton2 = 'entrer';
    } else {
      this.hello = 'bonjour';
      this.hello2 = 'doe';
      this.textButton = 'touch';
      this.textButton1 = 'move';
      this.textButton2 = 'dance';
    }
  }
}
