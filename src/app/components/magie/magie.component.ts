import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-magie',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './magie.component.html',
  styleUrl: './magie.component.css',
})
export class MagieComponent {
  hidden: boolean = false;

  toogle() {
    this.hidden = !this.hidden;
  }
}
