import { Component, Pipe } from '@angular/core';
import { ExoEnfantComponent } from '../exo-enfant/exo-enfant.component';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exo-parent',
  standalone: true,
  imports: [ExoEnfantComponent, CommonModule, FormsModule],
  templateUrl: './exo-parent.component.html',
  styleUrl: './exo-parent.component.css',
})
export class ExoParentComponent {
  users: User[] = [
    { id: 1, nom: 'foo', prenom: 'bar', age: 18, isVisible: true },
    { id: 2, nom: 'smith', prenom: 'jane', age: 22, isVisible: true },
    { id: 3, nom: 'john', prenom: 'doe', age: 18, isVisible: true },
    { id: 4, nom: 'jackson', prenom: 'michael', age: 30, isVisible: true },
    { id: 5, nom: 'brown', prenom: 'chris', age: 25, isVisible: true },
    { id: 6, nom: 'williams', prenom: 'serena', age: 28, isVisible: true },
    { id: 7, nom: 'jones', prenom: 'quincy', age: 34, isVisible: true },
    { id: 8, nom: 'johnson', prenom: 'emily', age: 21, isVisible: true },
    { id: 9, nom: 'martin', prenom: 'luther', age: 40, isVisible: true },
  ];
  // onClick(userView: User) {
  //   console.log(userView);
  //   userView.isVisible = false;
  //   console.log(userView);
  // }
  visible: boolean = true;

  changeValue(event: boolean) {
    this.visible = event;
  }
  showText!: string;
}
