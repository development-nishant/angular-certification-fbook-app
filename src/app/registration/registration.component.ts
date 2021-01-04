import {Component, OnInit, ViewChild} from '@angular/core';
import {RegistrationService} from './registration.service';
import {User} from '../utils/user';
import {JwtTokenService} from '../shared/services/jwt-token.service';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @ViewChild("registrationForm") registrationForm :NgForm;
  newUser :User;
  constructor(private router : Router,private registrationService: RegistrationService,private jwtTokenService:JwtTokenService) {
    this.newUser = new User();
  }

  ngOnInit(): void {

  }

  onRegisterClick(){
   /* let user = new User();
    user._firstName = "Nishant";
    user._lastName = "P";
    user._email = "nishant.prasad@virtusa.com";
    user._password = "@Virtusa09";
    user._gender = "male";
    user._dob = "01/01/1987";*/
    let registrationForm = this.registrationForm;
    ;
    if(this.registrationForm.valid){
      this.registrationService.registerNewUser(registrationForm.value).subscribe((resp:any)=>{
        alert(JSON.stringify(resp));
        this.router.navigateByUrl("auth/login");

      });
    }

  }

}
