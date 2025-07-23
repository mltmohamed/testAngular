import { Component, Input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCard } from "./components/playing-card/playing-card";
import { Monster } from './models/monster.models';

@Component({
  selector: 'app-root',
  imports: [PlayingCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('playing-cards');
   monster1! : Monster;
  constructor(){
    this.monster1 = new Monster();
    this.monster1.name="Pik";
    this.monster1.hp=200;
    this.monster1.figureCaption ="N°002";
  }
}
