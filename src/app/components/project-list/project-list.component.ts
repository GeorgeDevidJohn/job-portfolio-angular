import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';
@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [RouterLink,RouterLinkActive, RouterOutlet,NavigationComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {

}
