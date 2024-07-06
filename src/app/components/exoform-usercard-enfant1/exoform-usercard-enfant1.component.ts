import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserForm } from '../../models/userForm.model';
import { ExoformUsercardEnfant2Component } from '../exoform-usercard-enfant2/exoform-usercard-enfant2.component';

@Component({
  selector: 'app-exoform-usercard-enfant1',
  standalone: true,
  imports: [ExoformUsercardEnfant2Component],
  templateUrl: './exoform-usercard-enfant1.component.html',
  styleUrl: './exoform-usercard-enfant1.component.css',
})
export class ExoformUsercardEnfant1Component {
  @Input()
  user!: UserForm;
}
