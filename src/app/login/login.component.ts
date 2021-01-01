import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {JwtTokenService} from '../shared/services/jwt-token.service';
// @ts-ignore
import {JwtToken} from '../utils/jwttoken';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private loginService : LoginService,private jwtTokenService:JwtTokenService) { }

  ngOnInit(): void {
  }
  authenticate(){
    let loginDetails={
      email:"nishant.prasad.2909@gmail.com",
      password:"@Abcdef09"
    };
    this.loginService.authenticate(loginDetails).subscribe((resp:any)=>{
        if(resp && resp["token"]){
          this.jwtTokenService.setToken(resp);
          this.router.navigateByUrl("main/home")
        }
    }, (err)=>{
        console.log("Auth failed");
    });
  }
}
