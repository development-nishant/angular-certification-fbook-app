import { Component, OnInit } from '@angular/core';
import {JwtToken} from '../utils/jwttoken';
import {JwtTokenService} from '../shared/services/jwt-token.service';
import {HomeService} from './home.service';
import {Post} from '../utils/post';
import {SharedDataService} from "../shared/services/shared-data.service";
import {NetworkService} from "../network/network.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jwtToken : JwtToken;
  _allPosts : Post[];
  constructor(private jwtTokenService:JwtTokenService,private homeService:HomeService , private networkService:NetworkService,private sharedDataService:SharedDataService) {

  }

  ngOnInit(): void {
    this.jwtToken = this.jwtTokenService.getToken();
    this.fetchAllPosts();
    this.fetchAllConnections();
  }
  fetchAllPosts () :void{
    this.homeService.fetchAllPosts().subscribe((resp:any)=>{
      this._allPosts = resp;
      this.sharedDataService.setPostsCount( resp.length);
      this.sharedDataService.publishProfileData();
    },(err:any)=>{});
  }
  fetchAllConnections () :void{
    this.networkService.fetchAllFriendRequests().subscribe((resp:any)=>{
      this.sharedDataService.setConnectionsCount( resp.length);
      this.sharedDataService.publishProfileData();
    },(err:any)=>{});
  }
 createNewPost():void{
   let _newPost = new Post();
   _newPost._post = "HI Nishant";
   _newPost._isActive = true;
   _newPost._isAdmin = false;
   _newPost._postImageId = "HI Nishant";
   _newPost._profession = "HI Nishant";
   _newPost._userId = "HI Nishant";
   _newPost._userName = "HI Nishant";
   _newPost._userPhotoId = "HI Nishant";
   this.homeService.createNewPost(_newPost).subscribe((resp:any)=>{
     debugger;
   },(err:any)=>{});
 }

}
