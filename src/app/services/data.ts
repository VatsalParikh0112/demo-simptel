import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Dataservice {
  public products: string[] = [];

  getProducts(): string[] {
    return this.products;
  }

  addProducts(product: string) {
    this.products.push(product);
  }

  clearProducts() {
    this.products = [];
    return this.products;
  }

  removeProduct(productToRemove: string) {
    const index = this.products.findIndex(item => item === productToRemove);
    if (index > -1) {
      this.products.splice(index, 1); 
    }
  }
}
