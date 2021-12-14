import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DisplayDataStatus } from './displayDataStatus';
@Injectable({
  providedIn: 'root'
})
export class DisplayDataService {

  constructor(private http: HttpClient) { }
  indexdisplay(): Observable<DisplayDataStatus>{
    let url = 'http://localhost:8585/user';
    return this.http.get<DisplayDataStatus>(url);
  }
}

