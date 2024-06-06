import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatIcon,
    MatIconButton,
    RouterLink
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {


}
