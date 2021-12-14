import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderDetailStatus } from './OrderDetailStatus';
@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  constructor(private http: HttpClient) { }
  
  orderDisplay(): Observable<OrderDetailStatus>{
    let url = 'http://localhost:8585/order';
    return this.http.get<OrderDetailStatus>(url);
  }


}
