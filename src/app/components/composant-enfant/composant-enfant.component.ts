import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-composant-enfant',
  standalone: true,
  imports: [],
  templateUrl: './composant-enfant.component.html',
  styleUrl: './composant-enfant.component.css',
})
export class ComposantEnfantComponent {
  @Input()
  visible!: boolean;

  @Output()
  changeValue: EventEmitter<boolean> = new EventEmitter();

  onClick() {
    this.visible = !this.visible;
    this.changeValue.emit(this.visible); // Emit l'événement changeValue avec la nouvelle valeur de visible
  }
}
