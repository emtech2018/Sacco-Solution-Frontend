import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Gl} from 'src/app/interfaces/gl';
import { Message } from 'src/app/interfaces/message';
import {Response} from 'src/app/interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class GlService {
  private baseUrl: string = 'http://127.0.0.1:9099/gl/';
  

  constructor( private http: HttpClient) { }
  createGl(gl: Gl):Observable<Message>{
    return this.http.post<Message>(this.baseUrl+ 'add/', gl)
  }
  updateGlDefinition(gl: Gl):Observable<Message>{
    return this.http.put<Message>(this.baseUrl+ 'update', gl)
  }
 
  retrieveAllGlDefinitions(): Observable<Response> {
    return this.http.get<Response>(this.baseUrl+'all/');
   }

  retrieveGl(id:string){
    return this.http.get<Gl>(this.baseUrl+id)
  } 

}
