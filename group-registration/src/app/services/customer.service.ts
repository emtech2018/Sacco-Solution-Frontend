import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse,HttpHeaders } from '@angular/common/http';
import { CustomerRegistration } from 'src/app/interfaces/customer-registration';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
    private baseUrl: string = 'https://3.13.214.62:9000/customers/';
  constructor(private http:HttpClient) { }



getCustomers(token: string):Observable<CustomerRegistration[]>{
 let header = {
  headers: new HttpHeaders().set('Authorization',  `Bearer  ${token}`)
}

    return this.http.get<CustomerRegistration[]>(this.baseUrl,header);

}


}
