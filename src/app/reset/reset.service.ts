import { Injectable } from '@angular/core';
import {APP_CONFIG} from "../utils/constants";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  constructor(private  httpClient: HttpClient) { }

  reset(resetDetails:any){
    return this.httpClient.post<any>(APP_CONFIG.SERVICE_URL.BASE_URL+APP_CONFIG.SERVICE_URL.RESET_PASS,resetDetails);
  }
}
