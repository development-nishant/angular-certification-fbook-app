import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../utils/user';
import { SettingsService } from './settings.service';
import { JwtTokenService } from '../shared/services/jwt-token.service';
import { JwtToken } from '../utils/jwttoken';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  profileSettings : User;

  @ViewChild("settingForm") settingForm :NgForm;
  constructor(private settingsService : SettingsService,private jwtTokenService:JwtTokenService) {
    this.profileSettings = new User();
  }

  ngOnInit(): void {
    this.fetchUserDetailById();
  }
  onProfileSave(){
    this.settingsService.saveProfileSettings(this.profileSettings).subscribe(resp=>{
      alert("Profile settings saved!");
    },
    err=>{
      alert(err.error.message);
    });
  }

  fetchUserDetailById(){
    let jwtToken = this.jwtTokenService.getToken() ;
    let userId = jwtToken["_id"];
    if(userId){
      this.settingsService.fetchUserDetailById(userId).subscribe(resp=>{
        this.profileSettings = {...this.profileSettings,...resp};
      });
    }

  }
}
