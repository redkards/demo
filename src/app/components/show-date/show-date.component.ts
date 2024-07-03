import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-date',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './show-date.component.html',
  styleUrl: './show-date.component.css',
})
export class ShowDateComponent {
  today: Date = new Date();

  @Input() cityName!: string;
  @Input() cityTime!: string;

  constructor() {
    setInterval(() => {
      this.today = new Date();
    }, 1000);
    const timeIs = new Date().toLocaleString('en-US', {
      timeZone: this.cityTime,
    });
  }

  // public setTime(timeZone: string): string {
  //   const date = new Date().toLocaleString('fr-FR', {
  //     timeZone: timeZone,
  //   });
  //   const time = date.split(' ')[1];
  //   // Il manque la partie qui permet de mettre l'heure à jour toutes les secondes.
  //   return time;
  // }

  // public londres(timeZone: string): string {
  //   const date = new Date().toLocaleString('fr-FR', {
  //     timeZone: 'europe/Amsterdam',
  //   });
  //   const time = date.split(' ')[1];
  //   // Il manque la partie qui permet de mettre l'heure à jour toutes les secondes.
  //   return time;
  // }
  // public newyork(timeZone: string): string {
  //   const date = new Date().toLocaleString('fr-FR', {
  //     timeZone: 'America/new_york',
  //   });
  //   const time = date.split(' ')[1];
  //   // Il manque la partie qui permet de mettre l'heure à jour toutes les secondes.
  //   return time;
  // }
}
