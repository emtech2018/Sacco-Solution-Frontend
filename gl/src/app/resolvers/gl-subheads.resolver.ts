import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Glsubheads } from '../interfaces/gl-subheads';
import { GlSubheadsService } from '../services/gl-subheads.service';


@Injectable({
  providedIn: 'root'
})
export class GlSubheadsResolver implements Resolve<Glsubheads> {
  id !: string;

  constructor(private glSubheadService:GlSubheadsService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Glsubheads> {
    return this.glSubheadService.retrieveGlSubheads(route.params['id']);
  }
}
