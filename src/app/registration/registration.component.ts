import { Component, OnInit } from '@angular/core';
import {RegistrationService} from './registration.service';
import {User} from '../utils/user';
import {JwtTokenService} from '../shared/services/jwt-token.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private registrationService: RegistrationService,private jwtTokenService:JwtTokenService) { }

  ngOnInit(): void {

  }

  onRegisterClick(){
    let user = new User();
    user._firstName = "Nishant";
    user._lastName = "P";
    user._email = "nishant.prasad.2909@gmail.com";
    user._password = "@Abcdef09";
    user._gender = "male";
    user._dob = "01/01/1987";

    this.registrationService.registerNewUser(user).subscribe((resp:any)=>{
         alert(JSON.stringify(resp))
    });
  }

}
