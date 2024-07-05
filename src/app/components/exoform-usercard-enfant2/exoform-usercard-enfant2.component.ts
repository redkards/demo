import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserForm } from '../../models/userForm.model';

@Component({
  selector: 'app-exoform-usercard-enfant2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exoform-usercard-enfant2.component.html',
  styleUrl: './exoform-usercard-enfant2.component.css',
})
export class ExoformUsercardEnfant2Component {
  @Input()
  newUser!: UserForm;

  nom!: string;
  prenom!: string;
  age!: number;

  addUser() {
    this.newUser.nom = this.nom;
    this.newUser.prenom = this.prenom;
    this.newUser.age = this.age;
    console.log(this.newUser);
    this.nom = '';
    this.prenom = '';
    this.age = 0;
    // Reset form to default values
  }
}
