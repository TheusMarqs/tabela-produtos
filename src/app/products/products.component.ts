import { Component, OnInit } from '@angular/core';
import { Produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products : Produtos[] = [];

  constructor (private productService : ProdutosService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next : data => this.products = data
    });
  }
}
