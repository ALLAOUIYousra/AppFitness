import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class FormsComponent {
    formGroup!: FormGroup;

    constructor() { }
  
    ngOnInit(): void {
      this.formGroup = new FormGroup({
        nom: new FormControl(''),
        prenom: new FormControl(''),
        dateNaissance: new FormControl(''),
        telephone: new FormControl(''),
        email: new FormControl(''),
        adresse: new FormControl(''),
        cin: new FormControl(''),
      });
    }
  
    onSubmit() {
      // Traiter les données du formulaire
      console.log(this.formGroup.value);
    }

}
