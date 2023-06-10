import { Component, OnInit } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductService } from "../services/prodcut.service";


@Component({
  //selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  products!: Product[];
  selectedProduct: Product = {} as Product;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  createProduct(product: Product) {
    this.productService.createProduct(product).subscribe(() => {
      console.log('Product created successfully!');
      this.getProducts();
    });
  }

  updateProduct(product: Product) {
    this.productService.updateProduct(product).subscribe(() => {
      console.log('Product updated successfully!');
      this.getProducts();
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProductById(id).subscribe(() => {
      console.log('Product deleted successfully!');
      this.getProducts();
    });
  }

  selectProduct(product: Product) {
    this.selectedProduct = { ...product };
  }

  saveUpdatedProduct() {
    if (this.selectedProduct.id) {
      this.updateProduct(this.selectedProduct);
    } else {
      this.createProduct(this.selectedProduct);
    }
    this.selectedProduct = {} as Product;
  }
}
