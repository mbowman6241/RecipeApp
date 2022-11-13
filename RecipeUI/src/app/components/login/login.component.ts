import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  invalidLogin?: boolean;
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private router: Router, private http: HttpClient, private jwtHelper: JwtHelperService, private toastr: ToastrService) { }

  public login = (form: NgForm) => {
    const credentials = JSON.stringify(form.value);
    console.log('did I get here');

    this.http.post(this.baseApiUrl + '/api/Auth/login', credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe({
      next: (response) => {
        console.log('did I get here 2');
        const token = (<any>response).token;
        localStorage.setItem("jwt", token);
        this.invalidLogin = false;
        this.toastr.success("Logged In successfully");
        this.router.navigate(["/recipes"]);
      },
      error: (response) => {
        console.log('error response: ' + response);
        this.invalidLogin = true;
      }
    })
  }
  isUserAuthenticated() {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }
}
