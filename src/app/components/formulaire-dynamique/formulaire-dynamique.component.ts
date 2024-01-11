import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-formulaire-dynamique',
  templateUrl: './formulaire-dynamique.component.html',
  styleUrls: ['./formulaire-dynamique.component.scss']
})
export class FormulaireDynamiqueComponent implements OnInit {
  dynamicForm!: FormGroup;
  @Input() visible!: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {}

  ngOnInit(): void {
    this.dynamicForm = this.formBuilder.group({});
  }

  addControl(type: string, label: string, required: boolean): void {
    this.dynamicForm.addControl(label, this.formBuilder.control('', required ? Validators.required : null));
  }

  onSubmit(): void {
    alert('Formulaire envoyé !');
    const product = this.dynamicForm.value;
    this.productService.addProduct(product);
    console.log('Product added:', product);
    this.dynamicForm.reset();
  }
  
}
