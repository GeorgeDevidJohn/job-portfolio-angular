import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
 
})
export class HomeComponent {
  activeTab: string = 'skills'; // Default to the 'Skills' tab

  // Function to switch tabs
  showTab(tabName: string) {
    this.activeTab = tabName;
  }


  
}
