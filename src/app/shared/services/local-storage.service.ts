import { Injectable } from '@angular/core';
// @ts-ignore
import {JwtToken} from '../../utils/jwttoken';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setTokenInLocalStorage(token:any){
    localStorage.setItem("fbook_jwt_token", JSON.stringify(token));
  }
  getTokenFromLocalStorage():any{
    let jwtTokenString = localStorage.getItem("fbook_jwt_token");
    return  JSON.parse(jwtTokenString);
  }
  resetLocalStorage(){
    return localStorage.setItem("fbook_jwt_token",null);
  }

}
