import { HttpClient, HttpResponse,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { sbProduct } from '../interfaces/sb-product';
import { tdProduct } from '../interfaces/td-product';
import { odProduct } from '../interfaces/od-product';
import {  Message} from 'src/app/interfaces/message';
import {Response} from 'src/app/interfaces/response'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl: string = 'http://127.0.0.1:9100/';
  constructor(private http: HttpClient) { }

  //loan product
  createProduct(product: Product): Observable<Response>{
    return this.http.post<Response>(this.baseUrl+'loanproducts/add/', product);
   }
   updateProduct(product: Product): Observable<Response>{ 
    return this.http.put<Response>(this.baseUrl+'loanproducts/update', product);
  }

  retrieveAllProducts(): Observable<Response> { 
    return this.http.get<Response>(this.baseUrl+'loanproducts/all/');
  }

  retrieveProduct(id: string): Observable<Response> {
    return this.http.get<Response>(this.baseUrl+'loanproducts/'+id);
   }

   //td product
   createTdProduct(product: tdProduct): Observable<Response>{
    return this.http.post<Response>(this.baseUrl+'td/post/', product);
   }
   updateTdProduct(product: tdProduct): Observable<Response>{ 
    return this.http.put<Response>(this.baseUrl+'td/update', product);
  }

  retrieveAllTdProducts(): Observable<Response> { 
    return this.http.get<Response>(this.baseUrl+'td/all/');
  }

  retrieveTdProduct(id: string): Observable<Response> {
    return this.http.get<Response>(this.baseUrl+'td/'+id);
   }

   //od product
   createOdProduct(product: odProduct): Observable<Response>{
    return this.http.post<Response>(this.baseUrl+'od/create/', product);
   }
   updateOdProduct(product: odProduct): Observable<Response>{ 
    return this.http.put<Response>(this.baseUrl+'od/update', product);
  }

  retrieveAllOdProducts(): Observable<Response> { 
    return this.http.get<Response>(this.baseUrl+'od/all/');
  }

  retrieveOdProduct(id: string): Observable<Response> {
    return this.http.get<Response>(this.baseUrl+'od/'+id);
   }

   //sb product
   createSbProduct(product: sbProduct): Observable<Response>{
    return this.http.post<Response>(this.baseUrl+'sb/add/', product);
   }
   updateSbProduct(product: sbProduct): Observable<Response>{ 
    return this.http.put<Response>(this.baseUrl+'sb/update', product);
  }

  retrieveAllSbProducts(): Observable<Response> { 
    return this.http.get<Response>(this.baseUrl+'sb/all/');
  }

  retrieveSbProduct(id: string): Observable<Response> {
    return this.http.get<Response>(this.baseUrl+'sb/'+id);
   }
  
}
