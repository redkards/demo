import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserForm } from '../../models/userForm.model';
import { ExoformUsercardEnfant1Component } from '../exoform-usercard-enfant1/exoform-usercard-enfant1.component';
import { ExoformUsercardEnfant2Component } from '../exoform-usercard-enfant2/exoform-usercard-enfant2.component';

@Component({
  selector: 'app-exoform-usercard-parent',
  standalone: true,
  imports: [ExoformUsercardEnfant1Component, ExoformUsercardEnfant2Component],
  templateUrl: './exoform-usercard-parent.component.html',
  styleUrl: './exoform-usercard-parent.component.css',
})
export class ExoformUsercardParentComponent {
  users: UserForm[] = [];

  userData: UserForm = new UserForm();

  // addUser(user: UserForm):{
  //   this.user.push(user)
  // }
}
