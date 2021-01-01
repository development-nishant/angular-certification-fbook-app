import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {APP_CONFIG} from '../utils/constants';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private httpClient:HttpClient) { }
  fetchAllFriendRequests():Observable<any>{
    return this.httpClient.get(APP_CONFIG.SERVICE_URL.BASE_URL+APP_CONFIG.SERVICE_URL.GET_ALL_FRIENDS);
  }
}
