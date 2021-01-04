import {Component, OnDestroy, OnInit} from '@angular/core';
import {JwtToken} from '../utils/jwttoken';
import {JwtTokenService} from '../shared/services/jwt-token.service';
import {SharedDataService} from "../shared/services/shared-data.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit ,OnDestroy{
  jwtToken : JwtToken;
  userProfile : any ;
  private userProfileObservableSubscription :any;

  constructor(private jwtTokenService:JwtTokenService , private sharedDataService :SharedDataService) {
    this.jwtToken = this.jwtTokenService.getToken();
    this.userProfile = {
      _noOfConnections:0,
      _noOfPosts:0
    };

  }

  ngOnInit(): void {
    this.userProfileObservableSubscription = this.sharedDataService.userProfileObservable.subscribe((resp:any)=>{
        this.userProfile._noOfConnections = resp["_noOfConnections"];
        this.userProfile._noOfPosts = resp["_noOfPosts"];
        ;
      },
      (err:any)=>{
        console.log("Err"+err);
      });
  }

  ngOnDestroy(): void {
    this.userProfileObservableSubscription.unsubscribe();
  }

}
