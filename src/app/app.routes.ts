import { Routes } from '@angular/router';
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";
import {IdleGameComponent} from "./pages/idle-game/idle-game.component";
import {ZilchComponent} from "./pages/zilch/zilch.component";

export const routes: Routes = [
  {
    path: '', component: PortfolioComponent
  },
  {
    path: 'idle-game', component: IdleGameComponent
  },
  {
    path: 'zilch', component: ZilchComponent
  }
];
