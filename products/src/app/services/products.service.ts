import { HttpClient, HttpResponse,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import {  Message} from 'src/app/interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl: string = 'http://127.0.0.1:9100/products/';
  constructor(private http: HttpClient) { }

  createProduct(product: Product): Observable<Message>{
    return this.http.post<Message>(this.baseUrl+'add/', product);
   }
   updateProduct(product: Product): Observable<Message>{ 
    return this.http.put<Message>(this.baseUrl+'update-product', product);
  }

  retrieveAllProducts(): Observable<Product[]> { 
    return this.http.get<Product[]>(this.baseUrl);
  }

  retrieveProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.baseUrl+id);
   }
  
}
