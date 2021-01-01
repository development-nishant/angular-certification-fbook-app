import { Injectable } from '@angular/core';
// @ts-ignore
import {JwtToken} from '../../utils/jwttoken';
import {LocalStorageService} from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  jwtToken: JwtToken;

  constructor(private localStorageService:LocalStorageService) {
  }

  setToken(token: JwtToken) :void{
    if (token) {
      this.localStorageService.setTokenInLocalStorage(token);
    }
  }
  getToken ():JwtToken{
    return this.localStorageService.getTokenFromLocalStorage();
  }

}
