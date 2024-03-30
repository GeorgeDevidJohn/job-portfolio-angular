import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {  FormsModule,
  NgForm,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators, } from '@angular/forms';
  import { RouterOutlet,RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,RouterOutlet,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginComponent {

  constructor(private router: Router) { }
 
  ngOnInit() {
  }
 
   onSubmit() {
   this.router.navigate(['/data']);
   
  }

  loginform = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required]),
  });
 

}
