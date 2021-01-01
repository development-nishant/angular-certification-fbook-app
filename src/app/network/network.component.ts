import { Component, OnInit } from '@angular/core';
import {Post} from '../utils/post';
import {NetworkService} from './network.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  _allFriendRequests : any[];
  constructor(private networkService:NetworkService) { }

  ngOnInit(): void {
    this.fetchAllFriendRequests();
  }
  fetchAllFriendRequests () :void{
    //{"_id":"5df7ba8056cdc128f8c72995","userId":"5ed37322cb3a3d0004795ec2","friendId":"7ed22585cb3a3d000745ec5","status":"you are my friend","createdDate":"2019-12-16T17:10:24.074Z","__v":0,"id":"5df7ba8056cdc128f8c72995"}
    this.networkService.fetchAllFriendRequests().subscribe((resp:any)=>{
      this._allFriendRequests = resp;
    },(err:any)=>{});
  }
  updateFriendRequest($event:any,_fReq:any){
  debugger;

  }

}
