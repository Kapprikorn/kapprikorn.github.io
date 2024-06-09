import { Routes } from '@angular/router';
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";
import {IdleGameComponent} from "./pages/idle-game/idle-game.component";
import {ZilchComponent} from "./pages/zilch/zilch.component";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";

export const routes: Routes = [
  {
    path: '', component: LandingPageComponent
  },
  {
    path: 'portfolio', component: PortfolioComponent
  },
  {
    path: 'idle-game', component: IdleGameComponent
  },
  {
    path: 'zilch', component: ZilchComponent
  },
  {
    path: '**', redirectTo: ''
  }
];
