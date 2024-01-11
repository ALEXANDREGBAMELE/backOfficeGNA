import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GNA-BACKOFFICE';
  dynamicForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Créez le formulaire avec un contrôle initial vide
    this.dynamicForm = this.formBuilder.group({});
  }

  addControl(fieldName: string): void {
    // Ajoutez un nouveau contrôle dynamique au formulaire
    this.dynamicForm.addControl(fieldName, this.formBuilder.control('', Validators.required));
  }

  onSubmit(): void {
    // Traitement lorsque le formulaire est soumis
    console.log('Form submitted!', this.dynamicForm.value);
  }

}
