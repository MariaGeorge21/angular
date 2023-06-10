import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent implements OnInit {
  constructor(private productservice:ProductService){}
  Products:Product[]=[];

  ngOnInit():void{
    this.Products=this.getProducts();
  }
  getProducts():any{
    this.productservice.getProducts().subscribe((Products)=>{
    this.Products=Products;
    
  });
}
}
