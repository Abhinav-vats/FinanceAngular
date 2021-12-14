import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
import { Observable } from 'rxjs';
import { LoginReturned } from './loginReturned';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginserve(login : Login) : Observable<LoginReturned>{

    let url = "http://localhost:8585/login"

    return this.http.post<LoginReturned>(url, login);

  }
}
