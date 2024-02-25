import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CareersFormService {
  private apiUrl = 'https://ettiksoft-website.onrender.com/career/';
  private FileUrl = 'https://ettiksoft-website.onrender.com/SaveFile/';

  constructor(private http: HttpClient) { }
  addCareerForm(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
  getCareerData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  uploadfile(careerId: string, formData: FormData): Observable<any> {
    formData.append('career_id', careerId);
    return this.http.post(this.FileUrl, formData).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('File upload failed:', error);
        console.log('Error details:', error.error);
        return throwError(error);
      })
    );
  }
  
}
