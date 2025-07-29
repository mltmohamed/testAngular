import { Component, Input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCard } from "./components/playing-card/playing-card";
import { Monster } from './models/monster.models';
import { SearchBar } from './components/search-bar/search-bar';

@Component({
  selector: 'app-root',
  imports: [PlayingCard, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  search=''; 
  protected readonly title = signal('playing-cards');
   monster1! : Monster;
   monster2 : Monster = new Monster();
  constructor(){
    this.monster2.name="Mohamed";
    this.monster1 = new Monster();
    this.monster1.name="Pik";
    this.monster1.hp=10000;
    this.monster1.figureCaption ="N°002";
  }
  count : number = 0;
  increaseButton(){
    this.count++;
  }
  
}
