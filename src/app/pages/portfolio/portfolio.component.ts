import { Component } from '@angular/core';
import { GameCardsComponent } from '../../components/game-cards/game-cards.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [GameCardsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {}
