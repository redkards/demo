import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-show-date',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './show-date.component.html',
  styleUrl: './show-date.component.css',
})
export class ShowDateComponent {
  today: Date = new Date();
}
