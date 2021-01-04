import { Component, OnInit } from '@angular/core';
import {JwtToken} from '../utils/jwttoken';
import {JwtTokenService} from '../shared/services/jwt-token.service';
import {HomeService} from './home.service';
import {Post} from '../utils/post';
import {SharedDataService} from "../shared/services/shared-data.service";
import {NetworkService} from "../network/network.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jwtToken : JwtToken;
  _allPosts : Post[];
  createNewPostForm : FormGroup;
  constructor(private jwtTokenService:JwtTokenService,private homeService:HomeService , private networkService:NetworkService,private sharedDataService:SharedDataService) {

  }

  ngOnInit(): void {
    this.jwtToken = this.jwtTokenService.getToken();
    this.renderCreateNewForm();
    this.fetchAllPosts();
    this.fetchAllConnections();

  }
  renderCreateNewForm (){
    this.createNewPostForm = new FormGroup({
      postTxt : new FormControl(null,Validators.required)
    });
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
   let createNewPostForm = this.createNewPostForm;
   let jwtToken = this.jwtToken;
   let _newPost = new Post();
   _newPost._post = createNewPostForm["postTxt"];
   _newPost._isActive = jwtToken["isActive"];
   _newPost._isAdmin = jwtToken["isAdmin"];;
   _newPost._postImageId = jwtToken["photoId"];
   _newPost._profession = "HI Nishant";
   _newPost._userId = jwtToken["_id"];
   _newPost._userName = jwtToken["firstName"] + " " + jwtToken["lastName"] ;
   _newPost._userPhotoId = jwtToken["photoId"];

   this.homeService.createNewPost(_newPost).subscribe((resp:any)=>{
      alert(resp.message);
      this.createNewPostForm.reset();
   },(err:any)=>{
    alert(err.error.message);
   });

 }

}
