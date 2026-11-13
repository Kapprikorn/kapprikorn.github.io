import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameCardsComponent } from '../../components/game-cards/game-cards.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink, GameCardsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {}
