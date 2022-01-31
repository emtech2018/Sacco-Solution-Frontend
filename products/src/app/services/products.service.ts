import { HttpClient, HttpResponse,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import {  Message} from 'src/app/interfaces/message';
import {Response} from 'src/app/interfaces/response'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl: string = 'http://127.0.0.1:9100/loanproducts/';
  constructor(private http: HttpClient) { }

  createProduct(product: Product): Observable<Response>{
    return this.http.post<Response>(this.baseUrl+'add/', product);
   }
   updateProduct(product: Product): Observable<Response>{ 
    return this.http.put<Response>(this.baseUrl+'update', product);
  }

  retrieveAllProducts(): Observable<Response> { 
    return this.http.get<Response>(this.baseUrl+'all/');
  }

  retrieveProduct(id: string): Observable<Response> {
    return this.http.get<Response>(this.baseUrl+id);
   }
  
}
