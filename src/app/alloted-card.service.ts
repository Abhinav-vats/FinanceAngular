import { CustomerStatus } from './customerStatus';
import { AllotedCard } from './allotedCard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllotedCardService {


constructor(private http: HttpClient) {

}

allotedCardDetail(allotedcard: AllotedCard ): Observable<CustomerStatus>{
    let url = 'http://localhost:8585/allotedCardDetail';
    return this.http.post<CustomerStatus>(url, allotedcard);

}
}