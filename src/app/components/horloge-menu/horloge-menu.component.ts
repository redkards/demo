import { Component, OnInit } from '@angular/core';
import { HorlogeComponent } from '../horloge/horloge.component';

@Component({
  selector: 'app-horloge-menu',
  standalone: true,
  imports: [HorlogeComponent],
  templateUrl: './horloge-menu.component.html',
  styleUrl: './horloge-menu.component.css'
})
export class HorlogeMenuComponent {

  fuseaux: string[] = [
    'Europe/Paris',
    'Europe/London',
    'Europe/Helsinki',
    'America/Los_Angeles',
    'America/Montreal'
  ];
  setTime(timeZone: string): string {
    // Récupération de l'heure de la timezone sélectionnée
    const date = new Date().toLocaleString('fr-FR', { timeZone: timeZone });
    // Une fois traité par la ligne juste au dessus l'objet date ressemble à :
    // 19/07/2023 09:00:00. On utilise split pour séprarer les différentes parties de la date avec le caractère 'espace'
    const time = date.split(' ')[1]

    // Partie qui permet de mettre à jour l'horloge toute les secondes
    setInterval(() => {
      this.setTime(timeZone);
    }, 1000);
    
    return time;
  }



}
