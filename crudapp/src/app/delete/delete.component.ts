import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  productId:number=0;

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    
  }
  delete() :void{
    this.productService.deleteProductById(this.productId)
      .subscribe((response) => {
        console.log('Product deleted successfully');
      }, (error) => {
        console.log(error);
        // Handle error
      });
}
}
