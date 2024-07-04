import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-module',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-module.component.html',
  styleUrl: './reactive-form-module.component.css',
})
export class ReactiveFormModuleComponent {
  article: FormGroup = this.formBuilder.group({
    designation: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[a-zA-Z]+$/),
      ],
    ],
    prix: ['', [Validators.required, Validators.min(0)]],
  });

  articles: any[] = [];

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  private addArticle() {
    this.articles.push(this.article.value);
    // this.article.reset();
    this.submitted = false;
  }

  onSubmit(): boolean {
    this.submitted = true;
    if (this.article.invalid) {
      return false;
    } else {
      this.addArticle();
      return true;
    }
  }

  get form() {
    return this.article.controls;
  }

  get totalPrice(): number {
    return this.articles.reduce((total, article) => total + article.prix, 0);
  }
}
