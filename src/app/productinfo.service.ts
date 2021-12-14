import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ProductIdDto} from './productinfo/productinfo.component';
import { Observable } from 'rxjs';
import { ProductInfoStatus } from './productInfoStatus';
import { PurchaseProductDto } from './purchaseProductDto';
import { CustomerStatus } from './customerStatus';
@Injectable({
  providedIn: 'root'
})
export class ProductinfoService {
  constructor(private http: HttpClient) { }
  display(productIdDto :ProductIdDto): Observable<ProductInfoStatus>{
    let url = 'http://localhost:8585/productinfo';
    return this.http.post<ProductInfoStatus>(url,productIdDto);
  }
  
  purchaseProductService(purchaseProductDto : PurchaseProductDto): Observable<CustomerStatus>{
   let url ='http://localhost:8585/purchase';
   return this.http.post<CustomerStatus>(url,purchaseProductDto);
  }

}

