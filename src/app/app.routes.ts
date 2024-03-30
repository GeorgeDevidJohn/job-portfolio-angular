import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DataFillComponent } from './components/data-fill/data-fill.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { ResumeComponent } from './components/resume/resume.component';

export const routes: Routes = [
  // { path: '/', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
   { path: 'login', component: LoginComponent },
  { path: 'data', component: DataFillComponent },
  {path: 'home', component: HomeComponent},
  {path: 'projects', component: ProjectListComponent},
  {path: 'projectsdetails', component: ProjectDetailsComponent},
  {path: 'edit', component: EditProjectComponent},
  {path: 'resume', component: ResumeComponent} 
];