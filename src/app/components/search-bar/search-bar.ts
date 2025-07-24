import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  @Output() buttonCliked = new EventEmitter();
  searchButtonCliked(){
     this.buttonCliked.emit();
  }
}
