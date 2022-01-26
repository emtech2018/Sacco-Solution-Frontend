import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Interest } from 'src/app/interfaces/interest';
import {InterestService} from 'src/app/services/interest.service'

@Injectable({
  providedIn: 'root'
})
export class InterestResolverResolver implements Resolve<Interest> {
  constructor(private interestService: InterestService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Interest> {
    return this.interestService.retriveInterestDefinition(route.params.id);
  }
}
