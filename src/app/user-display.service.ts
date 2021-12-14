import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { UserDetailStatus } from './userDetailStatus';
import { CustomerIdDto } from './customerIdDto';

@Injectable({
  providedIn: 'root'
})
export class UserDisplayService {

  constructor(private http: HttpClient) { }
  display(customerIdDto :CustomerIdDto): Observable<UserDetailStatus>{
    let url = 'http://localhost:8585/fetch';
    return this.http.post<UserDetailStatus>(url,customerIdDto);
  }
}








 


