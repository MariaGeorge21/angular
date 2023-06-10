import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  private baseURL = "http://localhost:8090/api.1.0/product";

  constructor(private httpClient: HttpClient) { }
  
  getProductList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}/retrieve/all`);
  }

  create(product: Product): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/create`, product);
  }

  getProductById(productId: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/retrieve/${productId}`);
  }

  updateProduct( product: Product): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update`, product);
  }

  deleteProduct(productId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${productId}`);
  }
}