import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';
import { CustomerStatus } from './customerStatus';

@Injectable({
  providedIn: 'root'
})
export class UpdateDataService {

 
  constructor(private http: HttpClient) { }

  usernameCheck(username: string): Observable<CustomerStatus>{
    let url ='http://localhost:8585/checkusername';
    return this.http.post<CustomerStatus>(url, username);
  }

  update(customer: Customer): Observable<CustomerStatus>{
    let url = 'http://localhost:8585/update';
    return this.http.post<CustomerStatus>(url, customer);
  }
}




