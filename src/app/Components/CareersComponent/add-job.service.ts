import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddJobService {
  private apiUrl = 'https://ettiksoft-website.onrender.com/post-job/'; 
  constructor(private http: HttpClient) { }

  addJobForm(formDataArray: any[]): Observable<any> {
    return this.http.post(this.apiUrl, formDataArray);
  }
  
  getCareerData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
