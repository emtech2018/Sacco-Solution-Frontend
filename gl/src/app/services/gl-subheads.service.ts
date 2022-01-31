import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Glsubheads } from '../interfaces/gl-subheads';
import { Message } from 'src/app/interfaces/message';
import {Response} from 'src/app/interfaces/response'

@Injectable({
  providedIn: 'root'
})
export class GlSubheadsService {
   private baseUrl: string = 'http://127.0.0.1:9099/subhead/';
  constructor(private http:HttpClient) { }

  createGlSubheads(glSubheads:Glsubheads):Observable<Message>{
    return this.http.post<Message>(this.baseUrl+'add/',glSubheads)
  }
  updateGlSubheadsDefinition(glSubheads:Glsubheads):Observable<Message>{
    return this.http.put<Message>(this.baseUrl+ 'update', glSubheads)
  }
  retrieveAllGlSubheadDefinitions(): Observable<Response> {
    return this.http.get<Response>(this.baseUrl+'all/');
   }
   retrieveGlSubheads(id:string){
    return this.http.get<Glsubheads>(this.baseUrl+id)
  } 
 
}
