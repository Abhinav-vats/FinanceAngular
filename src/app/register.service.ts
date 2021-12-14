import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';
import { CustomerStatus } from './customerStatus';
import { VerifyDto } from './verifyDto';
import { OtpManagerDto } from './otpManagerDto';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {
    
   }

  usernameCheck(username: string): Observable<CustomerStatus>{
    let url ='http://localhost:8585/checkusername';
    return this.http.post<CustomerStatus>(url, username);
  }

  register(customer: Customer): Observable<CustomerStatus>{
    let url = 'http://localhost:8585/register';
    return this.http.post<CustomerStatus>(url, customer);
  }

  sendMailforOtp(verifyDto: VerifyDto): Observable<CustomerStatus>{
    let url = 'http://localhost:8585/emailotp';
    return this.http.post<CustomerStatus>(url, verifyDto);
  }

  verifyOtpEntered(otpManagerDto: OtpManagerDto): Observable<CustomerStatus>{
    let url = 'http://localhost:8585/verifyotp';
    return this.http.post<CustomerStatus>(url, otpManagerDto);
  }
}
