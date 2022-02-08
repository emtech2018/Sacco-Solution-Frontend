import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
import { Response } from '../interfaces/response';
import { Message } from '../interfaces/message';
import { Branch } from '../interfaces/branch';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
private baseUrl: string = "http://127.0.0.1:8080/branches"
  constructor(private http:HttpClient) { }


  createBranch(branch:Branch):Observable<Message>{
    return this.http.post<Message>(this.baseUrl+ 'add/', branch)
  }

  updateBranch(branch:Branch):Observable<Message>{
    return this.http.put<Message>(this.baseUrl+'update', branch)
  }

  retrieveAllBranches():Observable<Response>{
    return this.http.get<Response>(this.baseUrl+ 'add/')
  }

  getBranches(id:string){
    return this.http.get<Response>(this.baseUrl)
  }
}
