import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  invalidLogin?: boolean;
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private router: Router, private http: HttpClient, private jwtHelper: JwtHelperService,
    private toastr: ToastrService, private authService: AuthService) { }

  public login = (form: NgForm) => {
    const credentials = JSON.stringify(form.value);
  
    this.authService.login(credentials)
    .subscribe({
      next: (response) => {
        console.log('auth success response: ' + response);
        const token = (<any>response).token;
        localStorage.setItem("jwt", token);
        this.invalidLogin = false;
        this.toastr.success("Logged In successfully");
        this.router.navigate(["/recipes"]);
      },
      error:(response) => {
        console.log('error auth response: ' + JSON.stringify(response));
        this.invalidLogin = true;
      }
    })
  }
}
