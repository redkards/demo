import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-search.component.html',
  styleUrl: './form-search.component.css'
})
export class FormSearchComponent {

  placeholder :string = "rechercher"

  search !:string;
  
  @Output() valueChange : EventEmitter<string> = new EventEmitter(); 

  up(){
   this.valueChange.emit(this.search);
  }

}
