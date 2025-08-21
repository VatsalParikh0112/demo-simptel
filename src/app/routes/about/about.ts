import { Component, input, OnInit } from '@angular/core';
import { Dataservice } from '../../services/data';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit {
  aboutId = input.required<string>();
  limit = input.required<string>();

  productList: string[] = [];

  constructor(private dataService: Dataservice) { }

  private refreshProductList() {
    this.productList = this.dataService.getProducts();
  }

  ngOnInit() {
    this.productList = this.dataService.getProducts()
  }

  addNewProduct(productName: string) {
    if (productName) {
      this.dataService.addProducts(productName);
      this.refreshProductList();
    }
  }

  removeProduct(productName: string) {
    if (productName) {
      this.dataService.removeProduct(productName);
      this.refreshProductList();
    }
  }

  clearProducts() {
    this.dataService.clearProducts();
    this.refreshProductList();
  }
}
