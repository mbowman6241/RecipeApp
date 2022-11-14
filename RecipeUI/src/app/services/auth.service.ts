import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.http.post(this.baseApiUrl + '/api/Auth/login', credentials, {
      'headers': headers
    })
  }
}
