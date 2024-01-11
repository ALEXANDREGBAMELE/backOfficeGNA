import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: any[] = [];

  addProduct(product: any): void {
    this.products.push(product);
  }

  getProducts(): any[] {
    return this.products;
  }
}
