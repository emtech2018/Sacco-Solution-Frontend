import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {Gl} from 'src/app/interfaces/gl';
import { GlService } from '../services/gl.service';

@Injectable({
  providedIn: 'root'
})
export class GlResolver implements Resolve<Gl> {
  id !: string;

  constructor(private glService:GlService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Gl> {
    return this.glService.retrieveGl(route.params['id']);
  }
}
