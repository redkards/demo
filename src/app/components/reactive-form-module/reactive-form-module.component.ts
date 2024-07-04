import { Component } from '@angular/core';
import {
  FormControl,
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
  article!: FormGroup;

  articles: any[] = [];

  constructor() {
    this.article = new FormGroup({
      designation: new FormControl('', [
        Validators.required,
        Validators.min(2),
      ]),
      prix: new FormControl(0, Validators.required),
    });
  }

  addArticle() {
    this.articles.push(this.article.value);
    this.article.reset();
  }

  get designation() {
    return this.article.controls['designation'];
  }

  get totalPrice(): number {
    return this.articles.reduce((total, article) => total + article.prix, 0);
  }
}
