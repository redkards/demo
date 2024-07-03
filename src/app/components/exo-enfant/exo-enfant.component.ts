import { User } from './../../models/user.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exo-enfant',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exo-enfant.component.html',
  styleUrl: './exo-enfant.component.css',
})
export class ExoEnfantComponent {
  @Input()
  visible!: boolean;

  @Output()
  changeValue: EventEmitter<boolean> = new EventEmitter();

  onClick() {
    this.visible = !this.visible;
    this.changeValue.emit(this.visible); // Emit l'événement changeValue avec la nouvelle valeur de visible
  }
}
