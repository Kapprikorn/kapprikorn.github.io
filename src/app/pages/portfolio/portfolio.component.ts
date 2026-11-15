import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { GameCardsComponent } from '../../components/game-cards/game-cards.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [MatAnchor, GameCardsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {}
