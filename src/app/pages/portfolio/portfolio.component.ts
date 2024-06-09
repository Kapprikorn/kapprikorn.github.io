import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatCard
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
