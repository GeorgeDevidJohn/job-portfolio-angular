import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive, RouterOutlet,RouterOutlet,NavigationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
 
})
export class HomeComponent {
 
  
}
