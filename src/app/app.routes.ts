import { Routes } from '@angular/router';
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";

export const routes: Routes = [
  {
    path: '', component: LandingPageComponent
  },
  {
    path: 'portfolio', component: PortfolioComponent
  },
  {
    path: '**', redirectTo: ''
  }
];
