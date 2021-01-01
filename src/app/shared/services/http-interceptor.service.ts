import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JwtTokenService} from './jwt-token.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(private jwtTokenService:JwtTokenService) { }

  intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
    let _token = this.jwtTokenService.getToken();
    if(_token && _token['token']){
      let _headerParams = {
        Authorization : `Bearer ${_token['token']}`
      };
      httpRequest = httpRequest.clone({
        setHeaders:_headerParams
      });
    }

    return httpHandler.handle(httpRequest);
  }
}
