import { Interest } from 'src/app/interfaces/interest';
import { HttpClient, HttpResponse,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  Message} from 'src/app/interfaces/message';
import {Response} from 'src/app/interfaces/response'

@Injectable({
  providedIn: 'root'
})
export class InterestService {
  private baseUrl: string = 'http://127.0.0.1:9100/interest/';

  constructor(private http: HttpClient) { }

  createInterest(interest: Interest): Observable<Message>{
    return this.http.post<Message>(this.baseUrl+'add/', interest);
   }
   updateInterestDefinition(interest: Interest) {
    return this.http.put<Message>(this.baseUrl+'/update/', interest);
   }

  retrieveAllInterestDefinitions(): Observable<Response> {
    return this.http.get<Response>(this.baseUrl+'all/');
   }

  retriveInterestDefinition(id: string) { 
return this.http.get<Interest>(this.baseUrl+id);
  }
}
