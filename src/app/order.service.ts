import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderStatus } from './OrderStatus';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  orderDisplay(): Observable<OrderStatus>{
    let url = 'http://localhost:8585/order';
    return this.http.get<OrderStatus>(url);
  }
}
