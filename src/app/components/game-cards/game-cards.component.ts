import { Component } from '@angular/core';

interface Game {
  name: string;
  status: 'Internal testing' | 'Closed beta';
  description: string;
  icon: string;
  privacyPolicy?: string;
}

@Component({
  selector: 'app-game-cards',
  standalone: true,
  templateUrl: './game-cards.component.html',
  styleUrl: './game-cards.component.css'
})
export class GameCardsComponent {
  readonly games: Game[] = [
    {
      name: 'Color Blocks 2',
      status: 'Internal testing',
      description: 'A casual puzzle about sorting and stacking colours. Chase the highest score you can while the game gets harder the longer you play.',
      icon: '/games/color-blocks-2.png'
    },
    {
      name: 'Cauldron Cascade',
      status: 'Closed beta',
      description: 'Pick a marble, start a chain and brew potions to pass your alchemy exams. A roguelite puzzle game with charms, special marbles and examiners who bend the rules.',
      icon: '/games/cauldron-cascade.png',
      privacyPolicy: '/cauldron-cascade/privacy-policy/'
    },
    {
      name: 'Ledgers & Legends',
      status: 'Closed beta',
      description: "Run a guild in the wild kingdom of Corriveth. Send heroes out on quests, craft their gear, sell the loot in your shop, and research a tech tree that lets the guild run itself, even while you're away.",
      icon: '/games/ledgers-and-legends.svg'
    }
  ];
}
