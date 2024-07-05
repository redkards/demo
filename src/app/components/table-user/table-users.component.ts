import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { FormSearchComponent } from '../form-search/form-search.component';
import { ButtonDeleteComponent } from '../button-delete/button-delete.component';

@Component({
  selector: 'app-table-users',
  standalone: true,
  imports: [FormSearchComponent, ButtonDeleteComponent],
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.css',
})
export class TableUsersComponent {
  users: User[] = [
    { id: 1, nom: 'foo', prenom: 'bar', age: 18, isVisible: true },
    { id: 2, nom: 'smith', prenom: 'jane', age: 22, isVisible: true },
    { id: 3, nom: 'john', prenom: 'doe', age: 18, isVisible: true },
    { id: 4, nom: 'jackson', prenom: 'michael', age: 30, isVisible: true },
    { id: 5, nom: 'brown', prenom: 'chris', age: 25, isVisible: true },
    { id: 6, nom: 'williams', prenom: 'serena', age: 28, isVisible: true },
    { id: 7, nom: 'jones', prenom: 'quincy', age: 34, isVisible: true },
    { id: 8, nom: 'johnson', prenom: 'emily', age: 21, isVisible: true },
    { id: 9, nom: 'martin', prenom: 'luther', age: 40, isVisible: true },
  ];

  search: string = '';

  hasVisibleUser(): boolean {
    return this.users.some((person) => person.isVisible);
  }

  banUser(user: any) {
    user.isVisible = false;
  }

  userFilter(): any[] {
    const filterUser = this.users.filter(
      (user) =>
        user.nom.includes(this.search) || user.prenom.includes(this.search)
    );
    return filterUser;
  }

  changeValueSearch(event: string) {
    this.search = event;
  }
}
