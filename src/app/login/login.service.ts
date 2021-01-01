import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../utils/user';
import {APP_CONFIG} from '../utils/constants';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private  httpClient: HttpClient) { }

  authenticate(loginDetails : any){
    // tslint:disable-next-line:no-unused-expression
    return this.httpClient.post<any>(APP_CONFIG.SERVICE_URL.BASE_URL+APP_CONFIG.SERVICE_URL.AUTHENTICATE,loginDetails);
  }
}
