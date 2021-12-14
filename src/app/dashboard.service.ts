import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardStatus } from './dashboardStatus';
import { HttpClient } from '@angular/common/http';

import { CustomerIdDto } from './customerIdDto';
import { CustomerStatus } from './customerStatus';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient){}

  dashboardDisplay(customerIdDto: CustomerIdDto): Observable<DashboardStatus>{
    let url = "http://localhost:8585/dashboard"
    return this.http.post<DashboardStatus>(url, customerIdDto);
  }

  payInstallment(customerIdDto: CustomerIdDto): Observable<CustomerStatus>{
    let url= 'http://localhost:8585/paythisschedule';
    return this.http.post<CustomerStatus>(url, customerIdDto);
  }
}
