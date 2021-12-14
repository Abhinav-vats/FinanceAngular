import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentScheduleStatus } from './paymentScheduleStatus';
@Injectable({
  providedIn: 'root'
})
export class PaymentscheduleService {

  constructor(private http: HttpClient) { }
  paymentDisplay(): Observable<PaymentScheduleStatus>{
    let url = 'http://localhost:8585/paymentschedule';
    return this.http.get<PaymentScheduleStatus>(url);
  }

}
