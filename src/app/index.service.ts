import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductStatus } from './ProductStatus';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(private http : HttpClient) { }

  
  indexDisplay(): Observable<ProductStatus>{
    let url = 'http://localhost:8585/product';
    return this.http.get<ProductStatus>(url);
  }
}
