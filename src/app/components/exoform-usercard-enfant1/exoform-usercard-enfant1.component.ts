import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserForm } from '../../models/userForm.model';

@Component({
  selector: 'app-exoform-usercard-enfant1',
  standalone: true,
  imports: [],
  templateUrl: './exoform-usercard-enfant1.component.html',
  styleUrl: './exoform-usercard-enfant1.component.css',
})
export class ExoformUsercardEnfant1Component {
  @Input()
  user!: UserForm;

  // addUser() {
  //   this.user.push(this.newUser);

  //   this.newUser = '';

  //   console.log(this.user);
  // }
}
