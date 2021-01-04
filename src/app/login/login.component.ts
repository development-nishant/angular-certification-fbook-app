import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {JwtTokenService} from '../shared/services/jwt-token.service';
// @ts-ignore
import {JwtToken} from '../utils/jwttoken';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  constructor(private router:Router,private loginService : LoginService,private jwtTokenService:JwtTokenService) { }

  ngOnInit(): void {
    this.renderLoginFrom();
  }
  renderLoginFrom(){
    this.loginForm = new FormGroup({
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
      }
    );

  }
  onLoginClick():void{
    ;
    if(this.loginForm.valid) {

      let loginDetails = this.loginForm.value;

      this.loginService.authenticate(loginDetails).subscribe((resp: any) => {
        if (resp && resp["token"]) {
          this.jwtTokenService.setToken(resp);
          this.router.navigateByUrl("main/home");
        }
      }, (err) => {

        alert(err.error.message);

      });
    }else{
      this.loginForm.get('email').markAsTouched();
      this.loginForm.get('password').markAsTouched();
      return;
    }
  }
  onForgotPassClick(){
    this.router.navigateByUrl("auth/forgotpass");
  }


}
