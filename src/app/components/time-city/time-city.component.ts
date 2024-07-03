import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ShowDateComponent } from '../show-date/show-date.component';

@Component({
  selector: 'app-time-city',
  standalone: true,
  imports: [CommonModule, ShowDateComponent],
  templateUrl: './time-city.component.html',
  styleUrl: './time-city.component.css',
})
export class TimeCityComponent {
  ville: any = [
    {
      cityName: 'paris',
      cityTime: 'Europe/Paris',
    },
    {
      cityName: 'los Angeles',
      cityTime: 'America/Los_Angeles',
    },
    {
      cityName: 'new york',
      cityTime: 'America/New_York',
    },
  ];
}
