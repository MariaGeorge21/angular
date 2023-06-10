import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  product: Product = new Product();
  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveProduct(){
    this.productService.create(this.product).subscribe( data =>{
      console.log(data);
      this.goToProductList();
    },
    error => console.log(error));
  }
  
  goToProductList(){
    this.router.navigate(['/product-list']);
  }
  
  onSubmit(){
    console.log(this.product);
    this.saveProduct();
  }
}