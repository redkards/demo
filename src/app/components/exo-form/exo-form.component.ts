import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-exo-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './exo-form.component.html',
  styleUrl: './exo-form.component.css',
})
export class ExoFormComponent {
  userType = [
    {
      nom: 'dupont',
      prenom: 'jean',
      email: 'dupont@gmail.com',
      entreprise: 'dupontCompany',
      telephone: '0612345678',
    },
  ];

  user: FormGroup = this.formBuiler.group({
    nom: ['', [Validators.required, Validators.minLength(2)]],
    prenom: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    entreprise: ['', [Validators.required, Validators.minLength(5)]],
    telephone: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
        Validators.minLength(10),
      ],
    ],
  });

  userData: any[] = [];

  submitted: boolean = false;

  constructor(private formBuiler: FormBuilder) {}

  private addUser() {
    this.userData.push(this.user.value);
    this.user.reset();
    this.submitted = false;
  }

  onSubmit(): boolean {
    this.submitted = true;
    if (this.user.invalid) {
      return false;
    } else {
      this.addUser();
      return true;
    }
  }

  get nom() {
    return this.user.controls;
  }

  get prenom() {
    return this.user.controls;
  }

  get email() {
    return this.user.controls;
  }

  get entreprise() {
    return this.user.controls;
  }

  get telephone() {
    return this.user.controls;
  }
}
