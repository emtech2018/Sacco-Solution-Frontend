import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Branch } from '../interfaces/branch';
import { BranchService } from '../services/branch.service';

@Injectable({
  providedIn: 'root'
})
export class BranchResolver implements Resolve<Branch> {
  constructor(private branchService:BranchService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Branch> {
    return this.branchService.retrieveBranch(route.params['id']);
  }


}