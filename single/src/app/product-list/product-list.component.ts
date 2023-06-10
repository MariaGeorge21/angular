import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productId: number|any;
  products:Product[]|any;
  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(){
    this.productService.getProductList().subscribe((data: any) => {
      this.products = data;
    });
  }

  ProductDetails(productId: number){
    this.router.navigate(['productdetails', productId]);
  }

  updateProduct(productId: number){
    this.router.navigate(['update', productId]);
  }

  deleteProduct(productId: number){
    this.productService.deleteProduct(productId).subscribe( data => {
      console.log(data);
      this.getProducts();
    })
  }
}

