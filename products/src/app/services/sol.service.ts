import { HttpClient, HttpResponse,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sol } from '../interfaces/sol';

@Injectable({
  providedIn: 'root'
})
export class SolService {
  private baseUrl: string = 'https://3.13.214.62:9000/sol/'

  constructor(private http:HttpClient) { }

  retrieveAllSols(token: string):Observable<Sol[]>{
    let header = {
      headers: new HttpHeaders().set('Authorization',  `Bearer  ${token}`)
    }
    return this.http.get<Sol[]>(this.baseUrl,header);
  }
}
