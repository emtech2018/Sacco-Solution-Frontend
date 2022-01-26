import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product';
import {ProductsService} from "src/app/services/products.service"

@Injectable({
  providedIn: 'root'
})
export class ProductResolverResolver implements Resolve<Product> {
  constructor(private productService: ProductsService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    return this.productService.retrieveProduct(route.params.id);
  }
}
