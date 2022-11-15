import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseApiUrl + '/api/Users');
  }

  addNewUser(user: User): Observable<any> { 
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.http.post( this.baseApiUrl + '/api/Users', user, {'headers': headers });
  }
}
