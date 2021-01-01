import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {APP_CONFIG} from "../utils/constants";

@Injectable({
  providedIn: 'root'
})
export class FriendListService {

  constructor(private httpClient:HttpClient) { }
  fetchAllFriendList():Observable<any>{
    return this.httpClient.get(APP_CONFIG.SERVICE_URL.BASE_URL+APP_CONFIG.SERVICE_URL.GET_ALL_FRIENDS);
  }
}
