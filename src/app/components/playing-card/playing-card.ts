import { Monster } from './../../models/monster.models';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.html',
  styleUrl: './playing-card.css'
})
export class PlayingCard {
@Input({
  required:true
}) monster : Monster = new Monster();

}
