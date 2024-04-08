import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router'
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule,RouterLinkActive,RouterLink,RouterOutlet],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
 
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }




  
}



