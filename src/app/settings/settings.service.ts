import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../utils/constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private httpClient:HttpClient) { }
  fetchUserDetailById(userId:string):Observable<any>{
    return this.httpClient.get(APP_CONFIG.SERVICE_URL.BASE_URL+APP_CONFIG.SERVICE_URL.GET_USER_BY_ID+"/"+userId);
  }

}
