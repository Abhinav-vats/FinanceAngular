import { CustomerStatus } from './customerStatus';
import { Observable } from 'rxjs';
import { Activate } from './activate';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveServiceService {

  constructor(private http: HttpClient) {

  }

  activateCust(activate: Activate): Observable<CustomerStatus> {
    let url = 'http://localhost:8585/active';
    return this.http.post<CustomerStatus>(url, activate);
  }


}

