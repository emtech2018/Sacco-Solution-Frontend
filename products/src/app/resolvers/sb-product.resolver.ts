import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {ProductsService} from "src/app/services/products.service"
import {Response} from 'src/app/interfaces/response'

@Injectable({
  providedIn: 'root'
})
export class SbProductResolver implements Resolve<Response> {
  constructor(private productService: ProductsService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Response> {
    return this.productService.retrieveSbProduct(route.params.id);
  }
}
