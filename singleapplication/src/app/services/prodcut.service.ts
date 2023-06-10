import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable()

  export class ProductService {
  
    constructor(private http: HttpClient) { }
  
    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>("http://localhost:8090/product/api.1.0/retrieve/all");
    }
  
    createProduct(product: Product): Observable<Object> {
      return this.http.post("http://localhost:8090/product/api.1.0/create", product);
    }
  
    getProductById(id: number): Observable<Product> {
      return this.http.get<Product>(`http://localhost:8090/product/api.1.0/retrieve/${id}`);
    }
  
    updateProduct(product: Product): Observable<Object> {
      return this.http.put(`http://localhost:8090/product/api.1.0/update/${product.id}`, product);
    }
  
   deleteProductById(id:number):Observable<Product> {
  
    return this.http.delete<Product>(`http://localhost:8090/product/api.1.0/delete/${id}`);
   }
  }