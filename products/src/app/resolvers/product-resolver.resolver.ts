import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product';
import {ProductsService} from "src/app/services/products.service"
import {Response} from 'src/app/interfaces/response'

@Injectable({
  providedIn: 'root'
})
export class ProductResolverResolver implements Resolve<Response> {
  constructor(private productService: ProductsService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Response> {
    return this.productService.retrieveProduct(route.params.id);
  }
}
