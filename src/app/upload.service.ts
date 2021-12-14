import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UploadDocument } from './uploadDocument';
import { CustomerStatus } from './customerStatus';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  documentList : Array<UploadDocument> = new Array();

  constructor(private http: HttpClient) { }

  uploadDocuments(uploadDocument: FormData ): Observable<CustomerStatus>{
    const url = 'http://localhost:8585/uploadDoc';
    return this.http.post<CustomerStatus>(url, uploadDocument);
  }
}
