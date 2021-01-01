import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {APP_CONFIG} from '../utils/constants';
import {Post} from '../utils/post';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient:HttpClient) { }

  fetchAllPosts():Observable<any>{
    return this.httpClient.get(APP_CONFIG.SERVICE_URL.BASE_URL+APP_CONFIG.SERVICE_URL.GET_ALL_POSTS);
  }
  createNewPost(_newPost:Post) :Observable<any>{
    return this.httpClient.post(APP_CONFIG.SERVICE_URL.BASE_URL+APP_CONFIG.SERVICE_URL.CREATE_NEW_POST,_newPost);
  }
}
