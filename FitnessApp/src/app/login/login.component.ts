import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
 
  loginForm!: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  login(): void {
    // Logique de connexion...
  }
  // email: string = "";
  // password: string = "";

  // onSubmit() {
  //   // Envoyer les données de connexion au backend
  //   console.log("Envoi des données de connexion...");
  // }
}
