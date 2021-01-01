import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Post} from "../../utils/post";

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private userProfile:any = {
    _noOfConnections:0,
    _noOfPosts:0
  };
  userProfileSubject = new Subject<any>();
  userProfileObservable : Observable<any>= this.userProfileSubject.asObservable();
  constructor() { }

  publishProfileData () {
    return this.userProfileSubject.next(this.userProfile);
  }
  setConnectionsCount(_noOfConnections : number){
    this.userProfile._noOfConnections = _noOfConnections;
  }
  setPostsCount(_noOfPosts : number){
    this.userProfile._noOfPosts = _noOfPosts;
  }
  resetCounts():void{
    this.userProfile._noOfConnections = 0;
    this.userProfile._noOfPosts = 0;
  }
}
