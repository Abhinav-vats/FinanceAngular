import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';
import { CustomerStatus } from './CustomerStatus';
import { CustomerAdmin } from './customerAdmin';
@Injectable({
  providedIn: 'root'
})
export class DeleteDataService {

  constructor(private http: HttpClient) { }
  delete(id:CustomerAdmin): Observable<CustomerStatus>{
    let url = 'http://localhost:8585/delete';
    return this.http.post<CustomerStatus>(url, id);
  }
}
