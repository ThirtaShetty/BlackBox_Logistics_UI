import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-card',
  imports: [Button],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  @Input() cardLabel: string = 'Hello'; 
  @Input() buttonLabel: string = 'Continue'; 
  @Input() buttonEvent!: () => void; 

}

