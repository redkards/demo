import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-button-delete',
  standalone: true,
  imports: [],
  templateUrl: './button-delete.component.html',
  styleUrl: './button-delete.component.css'
})
export class ButtonDeleteComponent {

  @Input()
  user!: User;

  @Output() banUser : EventEmitter<User> = new EventEmitter(); 

  up(){
    this.banUser.emit(this.user)
  }


}
