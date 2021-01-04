import { Component, OnInit } from '@angular/core';
import {NetworkService} from "../network/network.service";
import {SharedDataService} from "../shared/services/shared-data.service";
import {FriendListService} from "./friend-list.service";

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  _allFriendList: any[];
  constructor(private networkService:NetworkService,private sharedDataService:SharedDataService,private friendListService:FriendListService) { }

  ngOnInit(): void {
    this.fetchAllFriendList();
  }
  fetchAllFriendList () :void{
    //{"_id":"5df7ba8056cdc128f8c72995","userId":"5ed37322cb3a3d0004795ec2","friendId":"7ed22585cb3a3d000745ec5","status":"you are my friend","createdDate":"2019-12-16T17:10:24.074Z","__v":0,"id":"5df7ba8056cdc128f8c72995"}
    this.friendListService.fetchAllFriendList().subscribe((resp:any)=>{
      this._allFriendList = resp;
      this.sharedDataService.setConnectionsCount(resp.length);
      this.sharedDataService.publishProfileData();
    },(err:any)=>{});
  }
  updateFriendRequest($event:any,_fReq:any){
    ;

  }

}
