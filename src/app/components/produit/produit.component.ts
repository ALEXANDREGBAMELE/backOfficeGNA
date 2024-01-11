import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  products: any[] = [];
  Object: any;
  visible!: boolean;
  prduitName = 'La liste des produits';
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log('ngOnInit');
    this.products = this.productService.getProducts();
  }
}