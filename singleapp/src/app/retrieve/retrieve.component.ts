import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent implements OnInit {
  productId:number|undefined;
  product:any;
  constructor(private productservice:ProductService){}
  Products:Product[]=[];
  selectedProduct:Product|undefined;

  ngOnInit():void{
    this.Products=this.getProducts();
   
  }
  getProducts():any{
    this.productservice.getProducts().subscribe((Products)=>{
    this.Products=Products;
    
  });
}

 

deleteProduct(productId:number) :void{
  this.productservice.deleteProductById(productId)
    .subscribe((response) => {
      console.log('Product deleted successfully');
    }, (error) => {
      console.log(error);
      // Handle error
    });
}
selectProduct(product:Product):void{
  this.selectedProduct={...product};
}
saveUpdatedProduct(): void {
  if(this.selectedProduct)
  {
    this.productservice.updateProduct(this.selectedProduct).subscribe(
    () => {
      this.getProducts();
      this.selectedProduct=undefined;
      console.log('Product updated successfully');
    },
    (error) => {
      console.log('Error updating product:', error);
    }
  );
}

}


}
