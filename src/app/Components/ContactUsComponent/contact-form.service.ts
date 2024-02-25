import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  private apiUrl = 'https://ettiksoft-website.onrender.com/cotact-form/'; 
  constructor(private http: HttpClient) { }

  addContactForm(formDataArray: any[]): Observable<any> {
    return this.http.post(this.apiUrl, formDataArray);
  }
  
  getCareerData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
