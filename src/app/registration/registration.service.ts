import { User } from './../utils/user';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG} from '../utils/constants';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private  httpClient: HttpClient) { }

  registerNewUser(newUser : User){
  // tslint:disable-next-line:no-unused-expression
    return this.httpClient.post(APP_CONFIG.SERVICE_URL.BASE_URL+APP_CONFIG.SERVICE_URL.USER_REGISTER,newUser);
  }
}
