import { APP_CONFIG } from './../utils/constants';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {JwtTokenService} from "../shared/services/jwt-token.service";
import {SharedDataService} from "../shared/services/shared-data.service";
import {LocalStorageService} from "../shared/services/local-storage.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public app_config : any ;
  constructor(private router:Router,private localStorageService:LocalStorageService,private jwtTokenService:JwtTokenService,private sharedDataService:SharedDataService) {
    this.app_config = APP_CONFIG;
  }
  ngOnInit(): void {
  }

  onLogoutClick($event:any):void{
    this.sharedDataService.resetCounts();
    this.localStorageService.resetLocalStorage();
    this.router.navigateByUrl("auth/");
  }

}
