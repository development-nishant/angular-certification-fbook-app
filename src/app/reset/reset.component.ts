import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {ResetService} from "./reset.service";
import {JwtTokenService} from "../shared/services/jwt-token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  resetForm : FormGroup;
  constructor(private  resetService :ResetService,private jwtTokenService:JwtTokenService,private router:Router) { }

  ngOnInit(): void {
    this.renderResetFrom();
  }

  renderResetFrom(){
    this.resetForm = new FormGroup({
        newPassword: new FormControl(null, Validators.required),
        confirmPassword: new FormControl(null, Validators.required)
      }
    );

  }
  onResetClick():void{
    if(this.resetForm.valid) {

      let resetDetails = this.resetForm.value;

      this.resetService.reset(resetDetails).subscribe((resp: any) => {
        if (resp && resp["token"]) {
          this.jwtTokenService.setToken(resp);
          this.router.navigateByUrl("auth/login");
        }
      }, (err) => {

        alert(err.error.message);

      });
      // As service detailes are not provided, so it is by default navigated to login page...
      this.router.navigateByUrl("auth/login");
    }else{
      this.resetForm.get('newPassword').markAsTouched();
      this.resetForm.get('confirmPassword').markAsTouched();
      return;
    }
  }
}
