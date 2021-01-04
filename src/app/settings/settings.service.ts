import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../utils/constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../utils/user';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private httpClient:HttpClient) { }
  fetchUserDetailById(userId:string):Observable<any>{
    return this.httpClient.get(APP_CONFIG.SERVICE_URL.BASE_URL+APP_CONFIG.SERVICE_URL.GET_USER_BY_ID+"/"+userId);
  }
  saveProfileSettings(userDetails : User){
    // tslint:disable-next-line:no-unused-expression
      return this.httpClient.post(APP_CONFIG.SERVICE_URL.BASE_URL+APP_CONFIG.SERVICE_URL.USER_REGISTER,userDetails);
    }
  }

