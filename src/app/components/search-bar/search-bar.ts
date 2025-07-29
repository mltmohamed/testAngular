import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Event } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  @Input() search = 'initial';
  @Output() buttonCliked = new EventEmitter();
  @Output() searchChange = new EventEmitter<string>();
  searchButtonCliked(){
     this.buttonCliked.emit();
  }
  updateSearch(value:string){
    this.searchChange.emit(value);
  }
}
