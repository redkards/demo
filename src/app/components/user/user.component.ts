import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  nom: string = 'john';
  prenom: string = 'doe';
  age: number = 30;
  imgUrl: string = 'https://picsum.photos/200/300';
  job: string = '';
}
