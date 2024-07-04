import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListeComponent } from './components/liste/liste.component';
import { UserComponent } from './components/user/user.component';
import { AlertButtonComponent } from './components/alert-button/alert-button.component';
import { MagieComponent } from './components/magie/magie.component';
import { ListeFiltreComponent } from './components/liste-filtre/liste-filtre.component';
import { ShowDateComponent } from './components/show-date/show-date.component';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';
import { GenericAlertButtonComponent } from './components/generic-alert-button/generic-alert-button.component';
import { ButtonMenuComponent } from './components/button-menu/button-menu.component';
import { TimeCityComponent } from './components/time-city/time-city.component';
import { ComposantEnfantComponent } from './components/composant-enfant/composant-enfant.component';
import { ComposantParentComponent } from './components/composant-parent/composant-parent.component';
import { ExoEnfantComponent } from './components/exo-enfant/exo-enfant.component';
import { ExoParentComponent } from './components/exo-parent/exo-parent.component';
import { ListeCourseComponent } from './components/liste-course/liste-course.component';
import { ReactiveFormModuleComponent } from './components/reactive-form-module/reactive-form-module.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ListeComponent,
    UserComponent,
    AlertButtonComponent,
    MagieComponent,
    ListeFiltreComponent,
    ShowDateComponent,
    CommonModule,
    UserCardComponent,
    GenericAlertButtonComponent,
    ButtonMenuComponent,
    TimeCityComponent,
    ComposantEnfantComponent,
    ComposantParentComponent,
    ExoEnfantComponent,
    ExoParentComponent,
    ListeCourseComponent,
    ReactiveFormModuleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title?: string;
}
