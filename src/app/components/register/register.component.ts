import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import {  FormsModule,
  NgForm,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators, } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet,FormsModule,RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  resgisterform = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required]),
    confirmPassword: new FormControl('', [
        Validators.required]),
  });
  
  onSubmit() {
   //API HERE
  }
}
