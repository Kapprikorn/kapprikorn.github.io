import { Component } from '@angular/core';
import {DiceComponent} from "../../components/dice/dice.component";

interface Dice {
  id: number;
  value: number;
}

@Component({
  selector: 'app-zilch',
  standalone: true,
  imports: [
    DiceComponent
  ],
  templateUrl: './zilch.component.html',
  styleUrl: './zilch.component.css'
})
export class ZilchComponent {
  dice: Dice[] = [
    {
      id: 1,
      value: 1,
    },
    {
      id: 2,
      value: 2,
    },
    {
      id: 3,
      value: 3,
    },
    {
      id: 4,
      value: 5,
    },
    {
      id: 5,
      value: 5,
    },
    {
      id: 6,
      value: 6,
    }
  ];

}
