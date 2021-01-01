import { Component, OnInit } from '@angular/core';
import {JwtToken} from '../utils/jwttoken';
import {JwtTokenService} from '../shared/jwt-token.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  jwtToken : JwtToken;
  profile : any ;
  constructor(private jwtTokenService:JwtTokenService) {
    this.jwtToken = this.jwtTokenService.getToken();
    this.profile = {
      _noOfConn:0,
      _noOfPosts:0
    };
  }

  ngOnInit(): void {
  }

}
