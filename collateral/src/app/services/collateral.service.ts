import { HttpClient, HttpResponse,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Collateral} from 'src/app/interfaces/collateral'
import {Response} from 'src/app/interfaces/response'

@Injectable({
  providedIn: 'root'
})
export class CollateralService {
  private baseUrl: string = 'http://127.0.0.1:9103/collateral/';

  constructor(private http: HttpClient) { }

  createCollateral(collateral: Collateral): Observable<Response>{
    return this.http.post<Response>(this.baseUrl+'add/', collateral);

  }

  retrieveCollateral(id: string): Observable<Response>{
    return this.http.get<Response>(this.baseUrl+id);
  }
  retrieveAllCollateral(): Observable<Response>{
    return this.http.get<Response>(this.baseUrl+'all/');
    
  }
  updateCollateral(collateral: Collateral): Observable<Response>{
    return this.http.post<Response>(this.baseUrl+'update/', collateral);
    
  }
}
