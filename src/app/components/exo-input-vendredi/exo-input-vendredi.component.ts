import { ButtonMenuComponent } from './../button-menu/button-menu.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-exo-input-vendredi',
  standalone: true,
  imports: [],
  templateUrl: './exo-input-vendredi.component.html',
  styleUrl: './exo-input-vendredi.component.css',
})
export class ExoInputVendrediComponent {
  @Input()
  titre!: string;

  @Input()
  buttonText!: string;

  @Input()
  bg!: string;

  @Input()
  testEnfant!: boolean;

  @Output()
  changeValue: EventEmitter<string> = new EventEmitter();

  @Output()
  changeTest: EventEmitter<boolean> = new EventEmitter();

  onClick() {
    this.changeValue.emit(this.titre); // Emit l'événement changeValue avec la nouvelle valeur de test
    this.changeTest.emit(this.testEnfant); // Emit l'événement changeValue avec la nouvelle valeur de test
  }
}
